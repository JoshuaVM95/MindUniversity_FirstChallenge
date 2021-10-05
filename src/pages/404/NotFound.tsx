import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import styles from "./NotFound.module.scss";

export const NotFound = ({ history }: RouteComponentProps): React.ReactElement => {
	useEffect(() => {
		window.scrollTo(0, 0);
		document.body.style.overflow = "hidden";
		const myInterval = setInterval(() => {
			clearInterval(myInterval);
			document.body.style.overflow = "";
			history.push("/");
		}, 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.notFoundContainer} style={{ height: "100vh" }}>
			<h1>404 - Not Found</h1>
		</div>
	);
};
