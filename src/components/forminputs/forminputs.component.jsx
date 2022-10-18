import React, { useState } from "react";
import "./forminputs.styles.css";

const FormInput = (props) => {
	const { type, placeholder, value, onChange } = props;
	const [inputType, setType] = useState(type);

	return (
		<div className="field">
			<input
				value={value}
				onChange={onChange}
				type={inputType}
				placeholder={placeholder}
				className="form-input"
			/>
			{type === "password" ? (
				<div
					onClick={() =>
						inputType === "password" ? setType("text") : setType(type)
					}
					className="form-show"
				>
					show
				</div>
			) : undefined}
		</div>
	);
};

export default FormInput;
