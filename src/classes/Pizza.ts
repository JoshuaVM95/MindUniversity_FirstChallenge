export type size = "small" | "medium" | "large" | "xLarge";

export interface PizzaData {
	size: size;
	ingredients: Array<string>;
	hasExtraCheese: boolean;
	price: number;
}

interface Food {
	getPizzaOrder(): string;
	getPizzaData(): PizzaData;
}

// We create our blueprint Pizza with general variables and methods
export class Pizza implements Food {
	// Here we make these variables only available to the children who inherit it
	protected ingredients: Array<string>;
	protected hasExtraCheese: boolean;
	protected size: size;
	protected price: number;

	private getSizePrice(size: size): number {
		switch (size) {
			case "small":
				return 2;
			case "medium":
				return 4;
			case "large":
				return 6;
			case "xLarge":
				return 8;
		}
	}

	constructor(ingredients: Array<string> = [], hasExtraCheese = false, size: size = "medium", price = 0) {
		const ingredientsPrice = ingredients.length * 2;
		const sizePrice = this.getSizePrice(size);
		const normalPrice = ingredientsPrice + sizePrice;
		this.ingredients = ingredients;
		this.hasExtraCheese = hasExtraCheese;
		this.size = size;
		this.price = price || normalPrice;
	}

	getPizzaOrder(): string {
		const pizzaIngrdients = this.ingredients.length > 1 ? this.ingredients.join() : this.ingredients[0];
		const extraCheese = this.hasExtraCheese ? "with extra cheese " : "";
		return `You have order a ${this.size} ${pizzaIngrdients} pizza ${extraCheese}`;
	}

	// Here we make the getPizzaData method available for all the objects
	public getPizzaData(): PizzaData {
		return {
			size: this.size,
			ingredients: this.ingredients,
			hasExtraCheese: this.hasExtraCheese,
			price: this.price
		};
	}

	setIngredients(newIngredients: Array<string>): void {
		this.ingredients = newIngredients;
	}

	setHasExtraCheese(newExtracheese: boolean): void {
		this.hasExtraCheese = newExtracheese;
	}

	setSize(newSize: size): void {
		this.size = newSize;
	}
}
