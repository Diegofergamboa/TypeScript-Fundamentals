(() => {
	// We can pass to the function information on a object type
	const login = (data: { email: string; password: string }) => {
		console.log(data.email, data.password);
	};

	login({ email: 'correo@mail.com', password: 'password123' });

	// Another example with a complex object
	type Sizes = 'S' | 'M' | 'L' | 'XL';

	// Just for this example
	const products: any[] = [];

	const addProduct = (data: {
		title: string;
		createdAt: Date;
		stock: number;
		//We're passing an optional param here
		size?: Sizes;
	}) => {
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
