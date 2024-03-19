import { useState, useEffect, useMemo } from 'react'
import { CartItem, GuitarInterface, GuitarID } from '../interfaces'
import db from '../data'

const useCart = () => {
	const initialCart = (): CartItem[] => {
		const localStorageCart = localStorage.getItem('cart')
		return localStorageCart ? JSON.parse(localStorageCart) : []
	}

	const [guitars] = useState(db)
	const [cart, setCart] = useState(initialCart)

	const MAX_ITEMS = 5
	const MIN_ITEMS = 1

	const addToCart = (item: GuitarInterface) => {
		const itemIndex = cart.findIndex((i) => i.id === item.id)

		if (itemIndex >= 0) {
			if (cart[itemIndex].quantity >= MAX_ITEMS) return
			const updatedCart = [...cart]
			updatedCart[itemIndex].quantity++
			setCart(updatedCart)
		} else {
			const newItem: CartItem = { ...item, quantity: 1 }
			setCart([...cart, newItem])
		}
	}

	const removeFromCart = (id: GuitarID) => {
		setCart((prevCart) => prevCart.filter((item) => item.id != id))
	}

	const increaseQuantity = (id: GuitarID) => {
		const newQuantity = cart.map((guitar) => {
			// if(guitar.id === id && guitar.quantity < 5)
			if (guitar.id !== id || guitar.quantity >= MAX_ITEMS) return guitar
			guitar.quantity++
			return guitar
		})
		setCart(newQuantity)
	}

	const decreaseQuantity = (id: GuitarID) => {
		const newQuantity = cart.map((guitar) => {
			// if (guitar.id === id && guitar.quantity > 1)
			if (guitar.id !== id || guitar.quantity <= MIN_ITEMS) return guitar
			guitar.quantity--
			return guitar
		})
		setCart(newQuantity)
	}

	const clearCart = () => {
		setCart([])
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	/* Cart */

	const cartIsEmpty = useMemo(() => cart.length === 0, [cart])
	// useMemo: It is a hook that allows you to memorize the result of a function and only re-execute it if one of its dependencies changes. It is useful when you have a function that is computationally expensive and you only want to execute it when necessary. In VUE, this is similar to a computed property.

	const cartTotal = useMemo(
		() => cart.reduce((total, item) => total + item.quantity * item.price, 0),
		[cart]
	)

	return {
		guitars,
		cart,
		addToCart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		clearCart,
		cartIsEmpty,
		cartTotal
	}
}

export default useCart
