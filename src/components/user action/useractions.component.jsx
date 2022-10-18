import React from "react";
import { ReactComponent as Activate } from "../../asset/Vector-1.svg";
import { ReactComponent as Blacklist } from "../../asset/Vector-2.svg";
import { ReactComponent as View } from "../../asset/Vector-3.svg";
import "./useractions.styles.css";

const UserActions = (props) => {
	const { hide } = props;
	return (
		<div className="user-actions hide">
			<div>
				<View />
				View Details
			</div>
			<div>
				<Blacklist />
				Blacklist User
			</div>
			<div>
				<Activate />
				Activate User
			</div>
		</div>
	);
};

export default UserActions;
