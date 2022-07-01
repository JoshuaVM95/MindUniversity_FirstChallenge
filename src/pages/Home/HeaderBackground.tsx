import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import styles from "./Home.module.scss";

export const HeaderBackground = (): React.ReactElement => {
	const navigate = useNavigate();

	const handleOrderNow = () => {
		navigate("/pizzaBuilder");
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
