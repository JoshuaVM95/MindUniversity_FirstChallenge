import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from './menu'
import styles from './navbar.module.scss'

export const NavBar = (): React.ReactElement => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const navBarContainer = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const addBackgroundToNavBar = () => {
			if (navBarContainer.current) {
				if (window.pageYOffset === 0) {
					navBarContainer.current.style.backgroundColor = 'transparent'
				} else {
					navBarContainer.current.style.backgroundColor = '#f3d528'
				}
			}
		}
		window.addEventListener('scroll', addBackgroundToNavBar)
		return () => {
			window.removeEventListener('scroll', addBackgroundToNavBar)
		}
	}, [])

	return (
		<div ref={navBarContainer} className={styles.navBarContainer}>
			<Link className={styles.navLink} to="/">
				Pizza Home
			</Link>
			<button className={styles.navIcon} onClick={() => setIsMenuOpen(true)}>
				<p>Menu</p>
				<i className={`fas fa-pizza-slice ${styles.bars}`}></i>
			</button>
			{isMenuOpen && <Menu onHideMenu={() => setIsMenuOpen(false)} />}
		</div>
	)
}
