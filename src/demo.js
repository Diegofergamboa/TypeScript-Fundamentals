// Using the next code ts-check we can made a real fixer of the code that we're writting without need of compile or run it to check the errors that the code have.

// !Command on ts 
//@ts-check

// !Code with errors
// (() => {
//     const myCart = [];
//     const products = [];
//     const limit = 2;

//     async function getProducts() {
//         const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
//             mehtod: 'GET'
//         });
//         const data = await rta.parseJson();
//         products.concat(data);
//     }
//     function getTotal() {
//         const total = 0;
//         for (const i = 0; i < products.length(); i++) {
//             total += products[i].prize;
//         }
//         return total;
//     }
//     function addProduct(index) {
//         if (getTotal <= limit) {
//             myCart.push(products[index]);
//         }
//     }

//     await getProducts();
//     addProducto(1);
//     addProducto(2);
//     const total = getTotal();
//     console.log(total);
//     const person = {
//         name: 'Nicolas',
//         lastName: 'Molina'
//     }
//     const rta = person + limit;
//     console.log(rta);
// });



//! Code debugged

const myCart = []
const products = []
const limit = 2

const getProducts = async () => {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
        method: 'GET'
    })
    const data = await rta.json()
    products.concat(data)
}

const getTotal = () => {
    const total = 0
    for (const i = 0 i < products.lenght i++) {
        total += products[i].prize
    }
    return total
}

const addProduct = (index) => {
    if (getTotal <= limit) {
        myCart.push(products[index])
    }

    await getProducts()
    addProducto(1)
    addProducto(2)
    const total = getTotal()
    console.log(total)
    const person = {
        name: 'Nicolas',
        lastName: 'Molina'
    }
    const rta = person + limit
    console.log(rta)
})
