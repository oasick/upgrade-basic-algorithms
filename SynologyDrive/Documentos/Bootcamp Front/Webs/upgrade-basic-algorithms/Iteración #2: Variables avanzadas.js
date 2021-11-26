const character = {name: 'Jack Sparrow', age: 25};
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 

console.log("Soy " + firstName + " " + lastName + ", tengo" + " " + age + " " + "años y me gustan los lobos.");


//Sumar precio

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log("El precio de " + toy1.name + " y " + toy2.name + " es " + (toy1.price + toy2.price) + "€" + " " + "en total."
);


// Actualizar valor precio
let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: (globalBasePrice + car1.basePrice)};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: (globalBasePrice + car2.basePrice)};

console.log("El precio del" + " " + car1.name + " " + "es de" + " " + car1.finalPrice + "€" + " " + "y el del" + " " + car2.name + " " + "es de" + " " + car2.finalPrice + "€.");

