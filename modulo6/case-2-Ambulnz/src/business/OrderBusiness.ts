
import { OrderDatabase } from "../database/OrderDatabase"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { IcreateOrderInputDTO, Order, ICreateOrderOutputDTO, IOrderItemDB, IGetOrdersOutputDTO } from "../models/Orders"
import { IdGenerator } from "../services/IdGenerator"

export class OrderBusiness {
    constructor(
        private orderDatabase: OrderDatabase,
        private idGenerator: IdGenerator
    ) {}

    public createOrder = async (input:IcreateOrderInputDTO): Promise<ICreateOrderOutputDTO> => {

        const pizzasInput = input.pizzas

        if(pizzasInput.length <= 0){
            throw new ParamsError("Pedido vazio!")
        }

        const pizzas = pizzasInput.map((pizza)=> {
            if(pizza.quantity <= 0){
                throw new ParamsError("quantidade mínima: 1 unidade")
            }
            return{
                ...pizza,
                price:0
            }
        })

        for(let pizza of pizzas){
            const price = await this.orderDatabase.getPrice(pizza.name)
            if(!price) {
                throw new NotFoundError("Pizza não encontrada")
            }
            pizza.price = price
        }
        
        const orderId = this.idGenerator.generate()

        await this.orderDatabase.createOrder(orderId)

        for(let pizza of pizzas) {
            const orderItem:IOrderItemDB ={
                id:this.idGenerator.generate(),
                pizza_name:pizza.name,
                quantity:pizza.quantity,
                order_id:orderId
            }
            await this.orderDatabase.insertItemOnOrder(orderItem)
          
        }
        const total = pizzas.reduce((acc, pizza) =>(acc +(pizza.price*pizza.quantity)), 
        0
        )
        
        const response: ICreateOrderOutputDTO = {
            message: "Pedido realizado com sucesso",
          order:{
            id:orderId,
            pizzas,
            total
          }
        }

        return response
    }
    public getOrders= async(): Promise<IGetOrdersOutputDTO> =>{
        const ordersDB = await this.orderDatabase.getOrders()

        const orders:Order[] = []
        
        for (let orderDB of ordersDB) {
            const order = new Order(
                orderDB.id,
                []
            )
            const orderItemsDB:any = await
            this.orderDatabase.getOrderItem(order.getId())

            for (let orderItemDB of orderItemsDB) {
                const price = await this.orderDatabase.getPrice(orderItemDB.pizza_name)

                orderItemDB.price = price
            }
            order.setOrderItems(orderItemsDB)

            orders.push(order)
        }
        const response: IGetOrdersOutputDTO ={
            orders:orders.map((order) =>({
                id:order.getId(),
                pizzas:order.getOrderItems().map((item) =>({
                    name:item.pizza_name,
                    quantity:item.quantity,
                    price:item.price
                })),
                total:order.getTotal()
            }))
        }
        return response
    }

}
