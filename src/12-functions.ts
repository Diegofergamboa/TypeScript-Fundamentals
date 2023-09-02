(() => {
	// The functions are a type of data to give funcionalities or transform executions on the code.
	type Sizes = 'S' | 'M' | 'L' | 'XL';
	// Here for example we have the function to convert a data to a product JSON
	function createProductToJson(
		title: string,
		createdAt: Date,
		stock: number,
		size: Sizes,
	) {
		return {
			title,
			createdAt,
			stock,
			size,
		};
	}

	// TypeScript doesn´t allow to us to don´t have missing params, because we're on this case trying to pass all the data
	const productOne = createProductToJson('Product1', new Date(), 12, 'XL');
	console.log(productOne.title);
	console.log(productOne.stock);

	// Example with arrow functions
	// For the case of the arrow functions just is neccesary pass the params with the arrow function syntax
	const createProductToJsonV2 = (
		title: string,
		createdAt: Date,
		stock: number,
		//For this cases, we can see that there are a type of "typing" and it's that we can let as optional a param, because when on JS we don´t pass a param, the value of the param is undefined. So using this option we can use it.
		size?: Sizes | undefined,
		// Another way to do this, is passing the optional chaining, BUT we have de disadvantage tha when we try to check it in the editor view, that param doesn´t show the type of "size | undefined" that we want to have and, I guess that doesn´t have a good readability.
	) => {
		return {
			title,
			createdAt,
			stock,
			size,
		};
	};

	const productTwo = createProductToJsonV2('Product1', new Date(), 12, 'XL');
	console.log(productTwo.title);
	console.log(productTwo.stock);
})();
