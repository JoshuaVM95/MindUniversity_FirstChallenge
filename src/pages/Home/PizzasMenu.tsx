import React from 'react'
import styles from './Home.module.scss'
import { pizzasMenu } from './pizzas'

export const PizzasMenu = (): React.ReactElement => {
	return (
		<div id="PizzasMenu" className={styles.pizzasMenu}>
			<h2 className={styles.menuTitle}>Available Pizzas</h2>
			<div className={styles.pizzasContainer}>
				{pizzasMenu.map((pizza, index) => {
					return (
						<div key={`${pizza.name}-${index}`} className={styles.pizzaContainer}>
							<div className={styles.title}>
								<h6 className={styles.name}>{pizza.name}</h6>
								<strong>${pizza.price}</strong>
							</div>
							<p className={styles.description}>{pizza.ingredients}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
