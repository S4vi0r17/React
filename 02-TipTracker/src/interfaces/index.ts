export interface MenuItem {
    id: number
    name: string
    price: number
}

export interface OrderItem extends MenuItem {
    quantity: number
}

export type ItemID = MenuItem['id'];
