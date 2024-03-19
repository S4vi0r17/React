export interface GuitarInterface {
	id: GuitarID
	name: string
	image: string
	description: string
	price: number
}

export interface CartItem extends GuitarInterface {
	quantity: number
}

export type GuitarID = number

// export type Guitar = {
// 	id: number
// 	name: string
// 	image: string
// 	description: string
// 	price: number
// }

// // export type CartItem = Guitar & {
// // 	quantity: number
// // }

// export type GuitarID = Guitar['id]

// export type CartItem = Pick<Guitar, 'id' | 'description'> & {
// 	quantity: number
// }

// Omit es lo contrario a Pick: https://www.typescriptlang.org/docs/handbook/utility-types.html
