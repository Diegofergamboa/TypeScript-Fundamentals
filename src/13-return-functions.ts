(() => {
	// This function obtain an array as an argument, using before the arrow, say what kind of data will be return the function.
	// This is a way to made a contract with the values.
	const calcTotal = (prices: number[]): number => {
		let total = 0;
		prices.forEach((item) => {
			total += item;
		});
		return total;
	};

	// For the cases of the functions that doesn´t return anything, we can use this estructure
	// Using the void 'contract'. We say to the algorithm that don´t return anything
	const printTotal = (prices: number[]): void => {
		const rta = calcTotal(prices);
		console.log(rta);
	};

	printTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})();
