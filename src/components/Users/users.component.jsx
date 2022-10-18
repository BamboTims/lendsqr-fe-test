import React, { Component } from "react";
import SummaryBox from "../summarybox/summarybox.component";
import { ReactComponent as User } from "../../asset/users-svgrepo-com.svg";
import { ReactComponent as Users } from "../../asset/users-svgrepo-com (1).svg";
import { ReactComponent as Loan } from "../../asset/coins-svgrepo-com (1).svg";
import { ReactComponent as Coins } from "../../asset/coins-svgrepo-com.svg";
import Filter from "../filter/filter.component";
import UserRow from "../User-row/userrow.component";
import Spinner from "../spinner/spinner.component";
import Pagination from "../pagination/pagination.component";
import "./users.styles.css";

import {
	getActiveUsesFromCollection,
	mapActiveUsersinCollection,
} from "../../utils/utils";

class UsersList extends Component {
	state = {
		users: undefined,
		collection: undefined,
	};

	handleCollections = (collection) => {
		this.setState({ users: collection });
	};

	componentDidMount = async () => {
		try {
			const response = await fetch(
				"https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
			);
			let data = await response.json();
			data = mapActiveUsersinCollection(data);
			this.setState({ collection: data });
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const { users } = this.state;
		console.log(this.state.collection);
		return (
			<div className="user">
				<div className="user--header">
					<h3>Users</h3>
				</div>
				<div className="user--summary">
					<SummaryBox
						summary={this.state.collection?.length}
						header={"Users"}
						icon={<User />}
						color="purple"
					/>
					<SummaryBox
						summary={getActiveUsesFromCollection(this.state.collection)}
						header={"Active Users"}
						icon={<Users />}
						color="blue"
					/>
					<SummaryBox
						header={"Users with Loan"}
						icon={<Loan />}
						color="orange"
					/>
					<SummaryBox
						header={"Users with Savings"}
						icon={<Coins />}
						color="red"
					/>
				</div>
				<div className="user--table">
					<div className="user--table__header">
						<Filter filter="Organization" />
						<Filter filter="Username" />
						<Filter filter="Email" />
						<Filter filter="Phone Number" />
						<Filter filter="Date Joined" />
						<Filter filter="Status" />
					</div>

					{users ? (
						this.state.users.map((el) => (
							<UserRow
								key={el.id}
								org={el.orgName}
								name={el.userName}
								email={el.email}
								phone={el.phoneNumber}
								date={el.createdAt}
								status={el.status}
							/>
						))
					) : (
						<Spinner />
					)}
				</div>
				<Pagination
					collection={this.state.collection}
					handleCollections={this.handleCollections}
				/>
			</div>
		);
	}
}

export default UsersList;
