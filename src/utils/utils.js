export const filterCollectionByEntries = (collection, entries) => {
	if (!collection) return undefined;
	return collection.slice(0, entries);
};

export const getActiveUsesFromCollection = (collection) => {
	if (!collection) return;
	return collection.filter(
		(el) => new Date(el.createdAt) < new Date(el.lastActiveDate)
	).length;
};

export const mapActiveUsersinCollection = (collection) => {
	return collection.map((el) => {
		return new Date(el.createdAt) < new Date(el.lastActiveDate)
			? {
					status: "active",
					...el,
			  }
			: {
					status: "inactive",
					...el,
			  };
	});
};
