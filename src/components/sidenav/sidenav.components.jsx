import React from "react";
import { ReactComponent as Logout } from "../../asset/logout-svgrepo-com.svg";
import Section from "../section/section.component";
import "./sidenav.styles.css";

const SideNav = () => {
	return (
		<aside className="aside">
			<div className="aside--header">
				<h3>Switch Organization</h3>
			</div>

			<div className="aside--detail">
				<span>Dashboard</span>
			</div>
			<Section
				header="customers"
				links={[
					"Users",
					"Guarantors",
					"Loans",
					"Decision Models",
					"Savings",
					"Loan Requests",
					"Whitelist",
					"Karma",
				]}
			/>
			<Section
				header="Businesses"
				links={[
					"Organization",
					"Loan Products",
					"Savings Products",
					"Fees and Charges",
					"Transactions",
					"Services",
					"Service Account",
					"Settlements",
					"Reports",
				]}
			/>
			<Section
				header="Settings"
				links={[
					"Preferences",
					"Fees and Pricing",
					"Audit Logs",
					"System messages",
				]}
			/>
			<footer className="aside--footer">
				<Logout />
				<span>Logout</span>
			</footer>
		</aside>
	);
};

export default SideNav;
