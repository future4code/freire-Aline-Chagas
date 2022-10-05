export interface IOrdersDB {
id:string

}

export interface IOrderItemsDB {
    id:string,
    pizza_name:string,
    quantity:string,
    order_id:string
}

export interface IOrderItem {
    id:string,
    pizza_name:string,
    quantity:string,
    order_id:string
}


export class Order{
    constructor(
        private id: string,
        private orderItems: IOrderItem[]
    ) {}

  
    public getId = () => {
        return this.id
    }

    public getOrderItems = () => {
        return this.orderItems
    }

    public setOrderItems = (newOrderItems: IOrderItem[]) => {
        this.orderItems = newOrderItems
    }

    public addOrderItem = (newOrderItem: IOrderItem) => {
        this.orderItems.push(newOrderItem)
    }

    public removeOrderItem = (idToRemove: string) => {
        return this.orderItems.filter(orderItem => orderItem.id !== idToRemove)
    }
}