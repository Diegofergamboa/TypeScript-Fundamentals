// The library using the underline works to use it into TS
// To work with that types for manually work with external libraries
import _ from 'lodash';

const data = [
	{
		username: 'Diego',
		role: 'Admin',
	},
	{
		username: 'Fernando',
		role: 'Expert',
	},
	{
		username: 'Ortiz',
		role: 'Admin',
	},
	{
		username: 'Gamboa',
		role: 'Sales',
	},
];

// Using now the manually types we can check the products
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
