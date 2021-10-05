import React from "react";
import styles from "./footer.module.scss";

export const Footer = (): React.ReactElement => {
	return (
		<footer className={styles.footerContainer}>
			<p>Pizza</p>
			<div>
				<i className="fab fa-facebook-square"></i>
				<i className="fab fa-instagram"></i>
				<i className="fab fa-twitter-square"></i>
			</div>
		</footer>
	);
};
