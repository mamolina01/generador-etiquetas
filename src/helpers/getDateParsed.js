export const getDateParsed = (dateToParsed) => {
	const date = new Date(dateToParsed);

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	day = day < 10 ? "0" + day : day;
	month = month < 10 ? "0" + month : month;

	const dateParsed = `${year}-${month}-${day}`;

	return dateParsed;
};
