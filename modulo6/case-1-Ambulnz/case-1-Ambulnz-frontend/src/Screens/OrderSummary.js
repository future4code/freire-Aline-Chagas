import { ContainerSection } from "./styledOrder"
import OrderItemCard from "../components/OrderItemCard"


function OrderSummary(props) {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <ContainerSection>
            <h1>Resumo do pedido</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard 
                    key={pizza.name} 
                    pizza={pizza} 
                    removeFromCart ={removeFromCart} 
                    
                    />
                )
            })}

            <h2>
                Total: {total.toLocaleString(
                'pt-br',
                { style: 'currency', currency: 'USD' }
                )}
            </h2>
            <button onClick={confirmOrder}>Confirmar pedido</button>
        </ContainerSection>
    )
}

export default OrderSummary
