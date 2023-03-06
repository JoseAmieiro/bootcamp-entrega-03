const product = { count: 21, price: 12.55, type: "ropa" };

let precioSinIva = product.count * product.price;
console.log(precioSinIva);

let iva;

if (product.type === "alimentacion") {
    iva = 0.1;
    
} else if (product.type === "libro") {
    iva = 0.04;
} else {
    iva = 0.21;    
}

console.log(iva);

let precioTotal = precioSinIva + (precioSinIva*iva);

console.log(precioTotal);