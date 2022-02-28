const fetchData = async url => {
	const req = await fetch(url);

	return req.json();
};

export { fetchData };
