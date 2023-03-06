const product = { count: 1, price: 12.55, type: "ropa"};

let precioSinIva; 

if(product.count < 0) {
    precioSinIva = 0;
} else {
    precioSinIva = product.count * product.price;
}

console.log("precio sin iva:" ,precioSinIva);

let iva;

switch (product.type) {
    case "alimentacion":
        iva = 0.10;        
        break;
     case "libro":
        iva = 0.04;        
         break;
     default: iva = 0.21;
}

console.log("tipo de iva: " ,iva);

let precioTotal = precioSinIva + (precioSinIva*iva);

console.log("precio total: " ,precioTotal);

