import React from "react";
import { NavLink } from "react-router-dom";

import "./sectionlink.styles.css";

const SectionLink = (props) => {
	const { link } = props;
	return (
		<NavLink
			to={link.toLowerCase()}
			className={({ isActive }) =>
				isActive ? "section--link active" : "section--link"
			}
		>
			{link}
		</NavLink>
	);
};
export default SectionLink;
