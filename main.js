//Precios iphones
let iphone13Precio = "500US$"
let iphone14Precio = "700US$"
let iphone15Precio = "900US$"

//Precios accesorios
let fundasPrecio = "5US$"
let lightingPrecio = "10US$"
let cargadorPrecio = "15US$"

//Precios airpods
let airpodsPro2Precio = "330US$"
let airpodsProPrecio = "50US$"
let airpods3Precio = "170US$"

function pedirNombre(){
    let nombre = prompt ("Por favor, ingresa tu nombre:");
    alert("Hola " + nombre + ", bienvenido a Irenoved");
}

function pedirEmail(){
    const email = prompt("Por favor, ingrese su correo electrónico:", "");
if (email) {
    confirm(`El correo electrónico ingresado es: ${email}"`);
} else {
    alert("No se ingresó ningún correo electrónico.");
}
}

function seguirEnvioCorreo(){
    alert ("¡Gracias por tu compra! Puedes seguir tu pedido a través del enlace que te enviamos por correo electrónico.")
}

function seleccionarProductos(){
    let productoSeleccionado;
    let continuar = true;

    while(continuar) {
        let elegirProductos = prompt ("Elija el producto que quiere comprar \n 1: Iphone \n 2: Accesorios \n 3: AirPods");
        productoSeleccionado = Number(elegirProductos);

        if (productoSeleccionado == 1) {
            let seleccionIphone = prompt ("Elija el producto que quiere comprar \n 1: Iphone 13 \n 2: Iphone 14 \n 3: Iphone 15");
            if (seleccionIphone == 1) {
                confirm("Has elegido Iphone 13, con un valor de " + iphone13Precio + " desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else if (seleccionIphone == 2) {
                confirm("Has elegido Iphone 14, con un valor de " + iphone14Precio + " desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else if (seleccionIphone == 3) {
                confirm("Has elegido Iphone 15, con un valor de " + iphone15Precio + " desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else {
                alert("Opción no válida. Por favor, elige entre 1, 2 o 3.");
            }
        }
        else if (productoSeleccionado == 2) {
            let seleccionAccesorios = prompt ("Elija el producto que quiere comprar \n 1: Fundas \n 2: lighting \n 3: cargador");
            if (seleccionAccesorios == 1) {
                confirm("Has elegido Fundas, con un valor de " + fundasPrecio + " desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else if (seleccionAccesorios == 2) {
                confirm("Has elegido lighting, con un valor de " + lightingPrecio + " desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else if (seleccionAccesorios == 3) {
                confirm("Has elegido cargador,  con un valor de " + cargadorPrecio + " desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else {
                alert("Opción no válida. Por favor, elige entre 1, 2 o 3.");
            }
        }
        else if (productoSeleccionado == 3) {
            let seleccionAirPods = prompt ("Elija el producto que quiere comprar \n 1: airpods pro 2 \n 2: airpods pro \n 3: airpods 3");
            if (seleccionAirPods == 1) {
                confirm("Has elegido airpods pro 2, con un valor de " + airpodsPro2Precio + " desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else if (seleccionAirPods == 2) {
                confirm("Has elegido airpods pro, con un valor de " + airpodsProPrecio + "  desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else if (seleccionAirPods == 3) {
                confirm("Has elegido airpods 3, con un valor de " + airpods3Precio + "   desea completar la compra?");
                seguirEnvioCorreo();
                continuar = false;
            } else {
                alert("Opción no válida. Por favor, elige entre 1, 2 o 3.");
            }
        }
        else {
            alert("Opción no válida. Por favor, elige entre 1, 2 o 3.");
        }
    }
}

pedirNombre();
pedirEmail();
seleccionarProductos();
completarCompra();
