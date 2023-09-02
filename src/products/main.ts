import { addProduct, calcStock, products } from './product.service';

addProduct({
	title: 'Product5',
	createdAt: new Date(),
	stock: 21,
	size: 'S',
});

addProduct({
	title: 'Product6',
	createdAt: new Date(),
	stock: 20,
});

console.log(products);
const totalProductsStock = calcStock();
console.log(totalProductsStock);
