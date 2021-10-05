import { Pizza, size } from './Pizza'

export class VeggiesPizza extends Pizza {
	constructor(hasExtraCheese = false, size: size = 'large') {
		super()
		this.ingredients = ['Green Pepper', 'Onion', 'Mushroom', 'Tomato', 'Black Olives']
		this.hasExtraCheese = hasExtraCheese
		this.size = size
	}

	getPizzaOrder(): string {
		const extraCheese = this.hasExtraCheese ? 'with extra cheese ' : ''
		return `You have order a ${this.size} veggies pizza ${extraCheese}`
	}
}
