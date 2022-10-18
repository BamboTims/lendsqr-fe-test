import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/header/header.component";
import SideNav from "../../components/sidenav/sidenav.components";
import PageNotFound from "../404 page/404.page";
import "./dashboard.styles.css";
import UsersList from "../../components/Users/users.component";

const UserPage = () => {
	return (
		<>
			<Header />
			<div className="body">
				<SideNav />
				<Routes>
					<Route path="/users" element={<UsersList />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</div>
		</>
	);
};

export default UserPage;
