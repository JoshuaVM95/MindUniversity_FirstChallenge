import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/NotFound";
import crypto from "crypto";
import { Footer } from "./components/footer/footer";
import { Orders } from "./pages/Orders/Orders";

const App = (): React.ReactElement => {
	useEffect(() => {
		const userId = localStorage.getItem("userId");
		if (!userId) {
			const id = crypto.randomBytes(20).toString("hex");
			localStorage.setItem("userId", id);
		}
	}, []);

	return (
		<Router>
			<div className="app-container">
				<Switch>
					<Route exact path="/orders" component={Orders} />
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
