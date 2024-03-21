import { useCallback } from "react"
import { OrderItem } from "../interfaces"
import { formatCurrency } from "../helpers"

interface TotalOrderProps {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

const TotalOrder = ({ order, tip, placeOrder }: TotalOrderProps) => {

    const subtotal = useCallback(() => {
        return order.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
    }, [order])

    const tipAmount = useCallback(() => subtotal() * tip, [tip, subtotal])

    const totalAmount = useCallback(() => subtotal() + tipAmount(), [subtotal, tipAmount])

    return (
        <>
            <div className="mt-5 p-5 space-y-3 bg-secondary1 shadow-lg rounded-lg w-3/4 mx-auto">
                <h2 className="font-medium text-2xl text-center">Total tips</h2>
                <p className="text-center">
                    Subtotal: <span>{formatCurrency(subtotal())}</span>
                </p>
                <p className="text-center">
                    Tip: <span>{formatCurrency(tipAmount())}</span>
                </p>
                <p className="text-center">
                    Total: <span>{formatCurrency(totalAmount())}</span>
                </p>
            </div>

            <button
                className="w-1/2 shadow-lg hover:scale-95 transition-all hover:shadow-none mx-auto block p-3 uppercase bg-secondary2 rounded-lg text-white font-medium mt-10 disabled:opacity-0"
                disabled={totalAmount() === 0}
                onClick={() => placeOrder()}
            >
                Save Order
            </button>
        </>
    )
}

export default TotalOrder
