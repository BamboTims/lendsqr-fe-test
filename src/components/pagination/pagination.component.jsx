import React, { useEffect, useState } from "react";
import { filterCollectionByEntries } from "../../utils/utils";
import "./pagination.styles.css";

const Pagination = (props) => {
	const [entries, setEntries] = useState(5);
	const { handleCollections, collection } = props;

	useEffect(() => {
		const users = filterCollectionByEntries(collection, entries);
		handleCollections(users);
	}, [entries, collection, handleCollections]);

	return collection ? (
		<div className="pagination">
			<div className="pagination--entries">
				Showing
				<div className="pagination--entries__select">
					<select
						name="entry"
						id="entry"
						onChange={(e) => setEntries(e.target.value)}
					>
						<option value="5">entries</option>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
				</div>
				out of {collection.length}
			</div>
			<div className="pagination--pages">
				<div className="pagination__btn">&lsaquo;</div>
				<div className="active">1</div>
				<div>2</div>
				<div>3</div>
				...
				<div>4</div>
				<div>5</div>
				<div className="pagination__btn">&rsaquo;</div>
			</div>
		</div>
	) : null;
};

export default Pagination;
