import React, { useState } from "react";
import { ReactComponent as ThreeDots } from "../../asset/Vector (2).svg";
import UserActions from "../user action/useractions.component";
import "./userrow.styles.css";

const UserRow = (props) => {
	const { org, name, email, phone, date, status } = props;
	const [hide, toggleHide] = useState("hide");
	return (
		<div className="user--row">
			<div className="user--row__cell">{org}</div>
			<div className="user--row__cell">{name}</div>
			<div className="user--row__cell">{email}</div>
			<div className="user--row__cell">{phone.split("x")[0]}</div>
			<div className="user--row__cell">{new Date(date).toDateString()}</div>
			<div className="user--row__cell">
				<div className={`user-status ${status}`}>{status}</div>
				<div
					onClick={() =>
						hide === "hide" ? toggleHide("") : toggleHide("hide")
					}
					className="user-icon"
				>
					<ThreeDots hide={hide} />
				</div>
			</div>
			<UserActions />
		</div>
	);
};

export default UserRow;
