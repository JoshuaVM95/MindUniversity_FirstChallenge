import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/404/NotFound";
import { Footer } from "./components/footer/footer";
import { Orders } from "./pages/Orders/Orders";

const App = (): React.ReactElement => {
	useEffect(() => {
		const userId = localStorage.getItem("userId");
		if (!userId) {
			const id = crypto.randomUUID();
			localStorage.setItem("userId", id);
		}
	}, []);

	return (
		<Router>
			<div className="app-container">
				<Routes>
					<Route path="/orders" element={<Orders />} />
					<Route path="/" element={<Home />} />
					<Route element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
