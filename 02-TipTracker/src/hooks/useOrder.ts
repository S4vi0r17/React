import { useState } from 'react'
import { ItemID, IMenuItem, OrderItem } from '../interfaces'

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: IMenuItem) => {

        const itemExist = order.find(i => i.id === item.id)

        if (itemExist) {
            const updateQuantity = order.map(o => o.id === itemExist.id ? { ...o, quantity: o.quantity += 1 } : o)
            setOrder(updateQuantity)

        } else {
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: ItemID) => {
        const newSummary = order.filter(item => item.id !== id)
        setOrder(newSummary)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        setOrder,
        addItem,
        removeItem,
        placeOrder
    }
}

export default useOrder
