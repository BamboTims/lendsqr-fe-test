import React from "react";
import { Link } from "react-router-dom";
import "./login.styles.css";
import Logo from "../../components/logo/logo.component";
import FormInput from "../../components/forminputs/forminputs.component";
import { ReactComponent as Pic } from "../../asset/pablo-sign-in 1.svg";

const LoginPage = () => {
	return (
		<div className="login">
			<div className="login--1">
				<Logo />
				<Pic className="login--pic" />
			</div>
			<div className="login--2">
				<h1 className="login--header">Welcome!</h1>
				<span className="login--details">Enter details to login.</span>
				<form className="login--form">
					<div className="field">
						<FormInput type="email" placeholder="Email" />
					</div>
					<div className="field">
						<FormInput type="password" placeholder="Password" />
					</div>
					<span className="login--form__forgot">Forgot Password? </span>
					<Link to="/dashboard">
						<button className="login--form__button">LOG IN</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
