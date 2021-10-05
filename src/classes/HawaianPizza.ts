import { Pizza, size } from './Pizza'

export class HawaianPizza extends Pizza {
	constructor(hasExtraCheese = false, size: size = 'medium') {
		super()
		this.ingredients = ['Ham', 'Pineapple']
		this.hasExtraCheese = hasExtraCheese
		this.size = size
	}
}
