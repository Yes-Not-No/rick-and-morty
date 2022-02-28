function selectUniqItems(array) {
	array.sort();
	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i] !== array[i + 1]) {
			newArray.push(array[i]);
		}
	}

	return newArray;
}

export { selectUniqItems };
