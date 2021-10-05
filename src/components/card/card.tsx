import React, { useMemo, useState } from "react";
import { HawaianPizza } from "../../classes/HawaianPizza";
import { PepperoniPizza } from "../../classes/PepperoniPizza";
import { Pizza } from "../../classes/Pizza";
import { VeggiesPizza } from "../../classes/VeggiesPizza";
import { TopPizzas } from "../../pages/Home/pizzas";
import { Button } from "../button/button";
import styles from "./card.module.scss";

interface CardProps {
	title: string;
	ingredients: string[];
	description: string;
	img: string;
	price: number;
	onPizzaBought(message: string): void;
	onPizzaBoughtFailed(): void;
}

export const Card = ({
	title,
	ingredients,
	description,
	img,
	price,
	onPizzaBought,
	onPizzaBoughtFailed
}: CardProps): React.ReactElement => {
	const pizza = useMemo(() => {
		switch (title) {
			case TopPizzas.Pepperoni:
				return new PepperoniPizza();
			case TopPizzas.Hawaian:
				return new HawaianPizza();
			case TopPizzas.Veggies:
				return new VeggiesPizza();
			default:
				return new Pizza(ingredients);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

	const handleBuy = () => {
		setIsButtonDisabled(true);
		const userId = localStorage.getItem("userId");
		const graphqlData = {
			query: `mutation createOrder($size: String!, $ingredients: [String!]!, $hasExtraCheese: Boolean!, $price: Int!) {
				createOrder(size: $size, ingredients: $ingredients, hasExtraCheese: $hasExtraCheese, price: $price) {
						code
						message
					}
				}`,
			variables: pizza.getPizzaData()
		};
		try {
			fetch(process.env.REACT_APP_GRAPHQL_URL || "http://localhost:3001/", {
				method: "POST",
				headers: {
					Authorization: userId || "",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(graphqlData)
			})
				.then(() => {
					onPizzaBought(pizza.getPizzaOrder());
					setIsButtonDisabled(false);
				})
				.catch((error) => {
					console.error("Fetch failed with error:", error);
					onPizzaBoughtFailed();
					setIsButtonDisabled(false);
				});
		} catch (error) {
			console.error(error);
			onPizzaBoughtFailed();
			setIsButtonDisabled(false);
		}
	};

	return (
		<div className={styles.cardContainer}>
			<img className={styles.cardImage} src={img} alt={title} />
			<h3 className={styles.cardTitle}>{title}</h3>
			<p className={styles.cardDescription}>{description}</p>
			<p className={styles.cardPrice}>${price}</p>
			<Button text="Buy now" size="medium" color="#333" onClick={handleBuy} disabled={isButtonDisabled} />
		</div>
	);
};
