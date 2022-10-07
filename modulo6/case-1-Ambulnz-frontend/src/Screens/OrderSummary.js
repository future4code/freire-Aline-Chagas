import styled from "styled-components"
import OrderItemCard from "../components/OrderItemCard"

export const ContainerSection = styled.section`
    width: 30em;
    border: 1px solid black;

    h1 {
        font-size: 1.5em;
        text-align: center;
    }
`

function OrderSummary(props) {
    const { cart } = props

    const calculateTotal = () => {
        const total = cart.reduce(
            (acc, item) => acc + (item.price * item.quantity),
            0
        )

        return total.toLocaleString(
            'pt-br',
            { style: 'currency', currency: 'USD' }
        )
    }

    return (
        <ContainerSection>
            <h1>Resumo do pedido</h1>

            {cart.map((pizza) => {
                return (
                    <OrderItemCard key={pizza.name} pizza={pizza} />
                )
            })}

            <h2>Total: {calculateTotal()}</h2>
            <button>Confirmar pedido</button>
        </ContainerSection>
    )
}

export default OrderSummary
