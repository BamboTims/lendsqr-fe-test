import React from "react";
import Image from "../../asset/bonbon-yellow-404.png";
import "./404.styles.css";

const PageNotFound = () => {
	return (
		<div className="page-404">
			<div className="page-404--image">
				<img src={Image} alt="404 page not found" />
			</div>
			<div className="page-404--text">
				<h2>Page Not Found </h2>
				<p>Try another Link </p>
			</div>
		</div>
	);
};

export default PageNotFound;
