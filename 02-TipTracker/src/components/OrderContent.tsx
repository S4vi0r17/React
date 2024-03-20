import { formatCurrency } from '../helpers'
import { ItemID, OrderItem } from '../interfaces'
import TrashIcon from '../assets/TrashIcon.svg'

interface OrderContentProps {
    order: OrderItem[]
    removeItem: (id: ItemID) => void
}

const OrderContent = ({ order, removeItem }: OrderContentProps) => {
    return (
        <div>
            <div className="space-y-3 mt-5">
                {order.length === 0 ? (
                    <p className="text-center text-lg">Your order is empty</p>
                ) : (
                    order.map((item) => (
                        <div
                            key={item.id}
                            className="shadow-lg p-5 flex justify-between rounded-md"
                        >
                            <div className="flex flex-col justify-between">
                                <p>{item.name}</p>
                                <p>
                                    Quantity: {item.quantity} -{' '}
                                    <span className="text-secondary2 font-medium">
                                        {formatCurrency(item.price * item.quantity)}
                                    </span>
                                </p>
                            </div>

                            <button
                                onClick={() => removeItem(item.id)}
                            >
                                <img src={TrashIcon} alt="Trash Icon" />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default OrderContent
