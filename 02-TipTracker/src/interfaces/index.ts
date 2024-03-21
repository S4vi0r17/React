export interface IMenuItem {
    id: number
    name: string
    price: number
}

export interface OrderItem extends IMenuItem {
    quantity: number
}

export type ItemID = IMenuItem['id'];
