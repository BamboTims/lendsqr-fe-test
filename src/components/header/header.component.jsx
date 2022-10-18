import React from "react";
import { ReactComponent as Logo } from "../../asset/Group.svg";
import Avatar from "../../asset/image 4.png";
import { ReactComponent as Bell } from "../../asset/Vector.svg";
import { ReactComponent as Search } from "../../asset/search-svgrepo-com.svg";
import FormInput from "../forminputs/forminputs.component";
import "./header.styles.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header--logo">
				<Logo />
			</div>
			<div className="header--input">
				<FormInput type="text" placeholder="search for anything" />
				<div className="header--input__search">
					<Search />
				</div>
			</div>
			<div className="header--links">
				<ul>
					<li className="underline">Docs</li>
					<li className="header--link">
						<Bell />
					</li>
					<li className="header--link">
						<div>
							<img src={Avatar} alt="avatar" />
						</div>
						Adedeji
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
