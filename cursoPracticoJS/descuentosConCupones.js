var coupons = ["rowOne", "rowTwo", "rowThree",];//Primero crear el arreglo. crear un espacio en la memoria para almacenar los elementos.

function priceWithDiscount(price, discount) {//segundo hacer la función que va hacer la tarea de calcular el precio con descuento.
    var percentagePriceWithDiscount = 100 - discount; 
    var priceWithDiscount = (price * percentagePriceWithDiscount) / 100;//? porq se divide por 100. es una regla de tres.
    return priceWithDiscount;
}

function discount_Coupon() { // Tercero hacer la función que ejecute el descuento por cupón.
    var inputPrice = document.getElementById("inputPrice");
    var priceValue = inputPrice.value;

    var inputCoupon = document.getElementById("inputCoupon");
    var couponValue = inputCoupon.value;

    //creamos una variable llamada descuento y asignamos un valor en un switch.

    var discount;

    switch(couponValue){
        case coupons[0]://en el case se puede colocar o se puede llamar al array coupons.
        discount = 10;
        break;

        case coupons[1]:
        discount = 15;
        break;

        case coupons[2]:
        discount = 20;
        break;
    }

    var resultPriceDiscount = priceWithDiscount(priceValue, discount);
    var resultDiscount = document.getElementById("resultDiscount");
    resultDiscount.innerText = "El precio con descuento es: $" + resultPriceDiscount;
    console.log(resultPriceDiscount);
}

