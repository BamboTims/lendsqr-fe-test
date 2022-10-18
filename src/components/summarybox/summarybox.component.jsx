import React from "react";
import "./summarybox.styles.css";

const SummaryBox = (props) => {
	const { icon, color, header, summary } = props;
	return (
		<div className="summary">
			<div className={`summary--image ${color}`}>{icon}</div>
			<div className="summary--header">
				<h4>{header}</h4>
			</div>
			<div className="summary--info">
				<span>{summary || 0}</span>
			</div>
		</div>
	);
};

export default SummaryBox;
