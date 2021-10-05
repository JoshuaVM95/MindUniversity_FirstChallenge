import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PizzaData } from '../../classes/Pizza'
import styles from './Orders.module.scss'

interface OrdersResponse {
	data: {
		orders: PizzaData[]
	}
}

export const Orders = (): React.ReactElement => {
	const [orders, setOrders] = useState<PizzaData[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setIsLoading(true)
		const userId = localStorage.getItem('userId')
		const graphqlData = {
			query: `query orders {
				orders {
						size
						ingredients
						hasExtraCheese
						price
					}
				}`
		}
		fetch(process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:3001/', {
			method: 'POST',
			headers: {
				Authorization: userId || '',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(graphqlData)
		})
			.then((data) => data.json())
			.then((response: OrdersResponse) => {
				setOrders(response.data.orders)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
				setIsLoading(false)
			})
	}, [])

	return (
		<div className={styles.ordersContainer}>
			<header className={styles.ordersHeader}>
				<Link className={styles.homeLink} to="/">
					Pizza Home
				</Link>
				<h1 className={styles.ordersTitle}>Orders history</h1>
			</header>
			<div className={styles.orderList}>
				{isLoading ? (
					<div className={styles.loaderContainer}>
						<div className={styles.spinner}>
							<div />
							<div />
						</div>
					</div>
				) : (
					orders.length === 0 && (
						<div className={styles.noOrdersMessage}>
							<h2>You have no orders yet :/</h2>
						</div>
					)
				)}
				{orders?.map((order, index) => {
					return (
						<div key={`${order.ingredients.join(',')}-${index}`} className={styles.orderContainer}>
							<span>Ingredients: {order.ingredients.join(', ')}</span>
							<span>Size: {order.size}</span>
							{order.hasExtraCheese && <span>With Extra Cheese</span>}
							<span>Price: ${order.price}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}
