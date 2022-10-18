import React from "react";
import { ReactComponent as LogoPic } from "../../asset/Group.svg";
import "./logo.styles.css";

const Logo = () => {
	return (
		<div className="logo">
			<LogoPic className="logopic" />
		</div>
	);
};

export default Logo;
