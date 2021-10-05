import React, { useRef } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

interface MenuProps {
	onHideMenu(): void;
}

export const Menu = ({ onHideMenu }: MenuProps): React.ReactElement => {
	const menuContainer = useRef<HTMLDivElement>(null);
	const menuFilter = useRef<HTMLDivElement>(null);

	const hideMenu = () => {
		if (menuContainer.current && menuFilter.current) {
			menuContainer.current.animate([{ right: "-26rem" }], { duration: 300, fill: "forwards", delay: 100 });
			menuFilter.current.animate([{ opacity: 0 }], { duration: 200, fill: "forwards" });
			const myInterval = setInterval(() => {
				clearInterval(myInterval);
				onHideMenu();
			}, 500);
		}
	};

	return (
		<div ref={menuContainer} className={`${styles.menuContainer}`}>
			<div ref={menuFilter} className={styles.menuFilter} />
			<button className={styles.closeMenuBtn} onClick={hideMenu}>
				<i className="fas fa-times"></i>
			</button>
			<a className={styles.menuLink} href="#TopPizzas" onClick={hideMenu}>
				Top 3 pizzas
			</a>
			<a className={styles.menuLink} href="#PizzasMenu" onClick={hideMenu}>
				Menu
			</a>
			<Link className={styles.menuLink} to="/orders" onClick={hideMenu}>
				Orders
			</Link>
		</div>
	);
};
