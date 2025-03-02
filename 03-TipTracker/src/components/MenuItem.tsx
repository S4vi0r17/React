import { IMenuItem } from "../interfaces"

interface MenuItemProps {
    item: IMenuItem
    addItem: (item: IMenuItem) => void
}

const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <button
            className="border-2 border-secondary1 rounded-lg hover:border-secondary2 hover:-translate-y-1 transition-all w-full p-3 flex items-center justify-between hover:shadow-lg"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-bold">${item.price}</p>
        </button>
    )
}

export default MenuItem
