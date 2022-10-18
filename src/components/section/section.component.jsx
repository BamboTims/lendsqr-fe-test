import React from "react";
import SectionLink from "../sectionlink/sectionlink.components";
import "./section.styles.css";

const Section = (props) => {
	const { header, links } = props;
	return (
		<div className="section">
			<div className="section--header">
				<h3>{header.toUpperCase()}</h3>
			</div>
			<ul className="section--links">
				{links.map((el) => (
					<li key={el}>
						<SectionLink link={el} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Section;
