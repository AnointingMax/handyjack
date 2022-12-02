export const setToStorage = (key, value) => {
	let storedValue = JSON.stringify(value);
	localStorage.setItem(key, storedValue);
};

export const getFromStorage = (key) => {
	let value = localStorage.getItem(key);
	return value ? JSON.parse(value) : null;
};
