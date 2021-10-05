import React from 'react'
import styles from './button.module.scss'

interface ButtonProps {
	text: string
	size: 'small' | 'medium' | 'large'
	color: string
	onClick(event: React.MouseEvent): void
	disabled?: boolean
}

export const Button = ({ text, size, color, onClick, disabled }: ButtonProps): React.ReactElement => {
	return (
		<button
			className={`${styles.button} ${styles[size]}`}
			style={{ backgroundColor: color }}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	)
}
