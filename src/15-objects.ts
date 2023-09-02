(() => {
	// We can pass to the function information on a object type
	// Now we have a type for complex object.
	type Sizes = 'S' | 'M' | 'L' | 'XL';
	type Product = {
		title: string;
		createdAt: Date;
		stock: number;
		size?: Sizes | undefined;
	};

	// Another example with a complex object

	// Using the complex type data. This array is an array that applies to the type of Product
	const products: Product[] = [];

	const addProduct = (data: Product) => {
		products.push(data);
	};

	addProduct({
		title: 'Product3',
		createdAt: new Date(),
		stock: 12,
		size: 'S',
	});

	addProduct({
		title: 'Product4',
		createdAt: new Date(),
		stock: 14,
	});

	console.log(products);
})();
