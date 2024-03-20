import { useState } from 'react'
import { ItemID, MenuItem, OrderItem } from '../interfaces'

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {

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

    return {
        order,
        setOrder,
        addItem,
        removeItem
    }
}

export default useOrder
