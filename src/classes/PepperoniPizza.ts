import { Pizza, size } from './Pizza'

export class PepperoniPizza extends Pizza {
	private hasExtraPepperoni: boolean
	constructor(hasExtraCheese = false, size: size = 'large', hasExtraPepperoni = false) {
		super()
		this.ingredients = ['Pepperoni']
		this.hasExtraCheese = hasExtraCheese
		this.size = size
		this.hasExtraPepperoni = hasExtraPepperoni
	}

	getPizzaOrder(): string {
		const extraCheese = this.hasExtraCheese ? 'with extra cheese ' : ''
		const extraPepperoni = this.hasExtraPepperoni ? 'with extra pepperoni ' : ''
		return `You have order a ${this.size} pepperoni pizza ${extraCheese} ${extraPepperoni}`
	}
}
