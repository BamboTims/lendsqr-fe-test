import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import UserPage from "./pages/dashboard/dashboard.page";

class App extends Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/dashboard/*" element={<UserPage />} />
				</Routes>
			</Router>
		);
	}
}

export default App;
