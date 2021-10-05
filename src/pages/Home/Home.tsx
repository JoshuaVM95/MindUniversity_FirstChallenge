import React from "react";
import { RouteComponentProps } from "react-router";
import styles from "./Home.module.scss";
import { HeaderBackground } from "./HeaderBackground";
import { TopPizzas } from "./TopPizzas";
import { PizzasMenu } from "./PizzasMenu";
import { NavBar } from "../../components/navbar/navbar";

export const Home = ({ history }: RouteComponentProps): React.ReactElement => {
	return (
		<div className={styles.homeContainer}>
			<NavBar />
			<HeaderBackground history={history} />
			<TopPizzas />
			<PizzasMenu />
		</div>
	);
};
