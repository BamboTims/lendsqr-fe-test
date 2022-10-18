import React from "react";
import { ReactComponent as Icon } from "../../asset/Vector (1).svg";

const Filter = ({ filter }) => {
	return (
		<div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
			{filter} <Icon />
		</div>
	);
};

export default Filter;
