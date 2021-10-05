import pepperoniPizza from "../../assets/img/pepperoni-pizza.jpg";
import hawaianPizza from "../../assets/img/hawaian-pizza.jpg";
import veggiesPizza from "../../assets/img/veggies-pizza.jpg";

export enum TopPizzas {
	"Pepperoni" = "Pepperoni",
	"Hawaian" = "Hawaian",
	"Veggies" = "Veggies"
}

export const mostOrderedPizzas = [
	{
		name: "Pepperoni",
		ingredients: "Pepperoni",
		size: "large",
		img: pepperoniPizza,
		price: 14
	},
	{
		name: "Hawaian",
		ingredients: "Ham and Pineapple",
		size: "large",
		img: hawaianPizza,
		price: 20
	},
	{
		name: "Veggies",
		ingredients: "Green pepper, onion, mushroom, tomato and black olives",
		size: "large",
		img: veggiesPizza,
		price: 24
	}
];

export const pizzasMenu = [
	{
		name: "Cheese",
		ingredients: "Cheese",
		price: 12
	},
	{
		name: "Meat",
		ingredients: "Pepperoni, beef, pork, ham, Italian sausage, and bacon",
		price: 18
	},
	{
		name: "Cold meats",
		ingredients: "Salami, pepperoni and ham",
		price: 16
	},
	{
		name: "Pepperoni Special",
		ingredients: "Pepperoni, mushrooms and extra cheese",
		price: 14
	},
	{
		name: "Honolulu",
		ingredients: "Ham, bacon, pineapple and jalapeño",
		price: 18
	},
	{
		name: "4 Cheese",
		ingredients: "Mozzarella cheese, cream cheese, cheddar cheese, and Parmesan cheese",
		price: 20
	},
	{
		name: "Extra pepperoni",
		ingredients: "Double pepperoni",
		price: 22
	},
	{
		name: "1 ingredient",
		ingredients: "Choose between pepperoni, ham, bacon, mushrooms or salami",
		price: 14
	}
];
