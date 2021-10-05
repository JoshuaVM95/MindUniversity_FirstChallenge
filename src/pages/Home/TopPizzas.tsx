import React, { useEffect, useState } from 'react'
import { Card } from '../../components/card/card'
import styles from './Home.module.scss'
import { mostOrderedPizzas } from './pizzas'

export const TopPizzas = (): React.ReactElement => {
	const [showMessage, setShowMessage] = useState<string>('')
	const [showFailedMessage, setShowFailedMessage] = useState<boolean>(false)

	useEffect(() => {
		if (showMessage) {
			const myInterval = setInterval(() => {
				setShowMessage('')
				clearInterval(myInterval)
			}, 3000)
		}
	}, [showMessage])

	useEffect(() => {
		if (showFailedMessage) {
			const myInterval = setInterval(() => {
				setShowFailedMessage(false)
				clearInterval(myInterval)
			}, 3000)
		}
	}, [showFailedMessage])

	return (
		<div id="TopPizzas" className={styles.topPizzas}>
			<h2 className={styles.topPizzasTitle}>Choose from our top saled pizzas</h2>
			<div className={styles.cardsContainer}>
				{mostOrderedPizzas.map((pizza, index) => {
					const ingredients = pizza.ingredients.split(/,|and/).map((value) => value.trim())
					return (
						<Card
							key={`${pizza.name}-${index}`}
							title={pizza.name}
							ingredients={ingredients}
							description={`Ingredients: ${pizza.ingredients} - Size: ${pizza.size}`}
							img={pizza.img}
							price={pizza.price}
							onPizzaBought={setShowMessage}
							onPizzaBoughtFailed={() => setShowFailedMessage(true)}
						/>
					)
				})}
			</div>
			{showMessage && <span className={styles.pizzaBoughtMessage}>{showMessage}</span>}
			{showFailedMessage && (
				<span className={styles.pizzaFailedMessage}>Sorry, we couldnt complete your order :(</span>
			)}
		</div>
	)
}
