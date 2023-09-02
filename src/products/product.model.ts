type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
	// For changes of names of variables, TSC shows the correct function
	title: string;
	createdAt: Date;
	stock: number;
	size?: Sizes | undefined;
};

export { Sizes, Product };
