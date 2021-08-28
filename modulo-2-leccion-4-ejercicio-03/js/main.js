'use strict';

function calculoDeIva() {
    const price = 8;
    const iva = parseInt(price) * 0.21;
    const total = price + iva;
    return (`Precio sin Iva: ${price}, Iva: ${iva} y Total : ${total}`)
}

console.log(calculoDeIva());