import React from "react";
import * as H from "history";
import { Button } from "../../components/button/button";
import styles from "./Home.module.scss";

interface HeaderBackgroundProps {
	history: H.History;
}

export const HeaderBackground = ({ history }: HeaderBackgroundProps): React.ReactElement => {
	const handleOrderNow = () => {
		history.push("/pizzaBuilder");
	};

	return (
		<div className={styles.mainBg}>
			<h1 className={styles.title}>Pizza express</h1>
			<p className={styles.description}>
				Try our best pizzas, only now for $1 dollar, and receive it in under 5 minutes
			</p>
			<Button text="Order Now" size="large" color="#db3630" onClick={handleOrderNow} />
		</div>
	);
};
