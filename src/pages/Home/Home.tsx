import React from "react";
import styles from "./Home.module.scss";
import { HeaderBackground } from "./HeaderBackground";
import { TopPizzas } from "./TopPizzas";
import { PizzasMenu } from "./PizzasMenu";
import { NavBar } from "../../components/navbar/navbar";

export const Home = (): React.ReactElement => {
	return (
		<div className={styles.homeContainer}>
			<NavBar />
			<HeaderBackground />
			<TopPizzas />
			<PizzasMenu />
		</div>
	);
};
