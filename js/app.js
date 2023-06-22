let sumartotal = 0;
let sumaSemi = 0;
let sumaAcri = 0;
let sumaCapp = 0;
let sumaMasajes = 0;
let medioDePago = 0;
let cuotas = 0;
let total = 0;
let compra = 0;
let precio = 0;
alert(`BIENVENIDA/O A SPA BONN`);
/* CLASS CONSTRUCTORA DE LOS SEVICIOS */
class Servicios {
  constructor(id, servicio, precio, duracion) {
    this.id = id;
    this.servicio = servicio;
    this.precio = precio;
    this.duracion = duracion;
  }
}
/* OBJETOS */
const servicio1 = new Servicios(1, "Semipermanente", 4000, "1:30 hs");
const servicio2 = new Servicios(2, "Acrilicas", 7500, "3:00 hs");
const servicio3 = new Servicios(3, "Capping", 5000, "2:00 hs");
const servicio4 = new Servicios(4, "Masajes", 2400, "0:50 hs");

/* ARRAY DE LOS SERVICIOS */
const serviciosOfrecer = [];
// pusheando los objetos
serviciosOfrecer.push(servicio1, servicio2, servicio3, servicio4);

/* FUNCION 1 */
/* TOTAL A PAGAR */
function mostrarResultados() {
  alert(`Servicios seleccionados:
  ${sumaSemi} Semipermanente
  ${sumaAcri} Acrilico
  ${sumaCapp} Capping
  ${sumaMasajes} Masajes
  el total de los servicios es de $${sumartotal}.`);

  /* METODO DE PAGO */
  /* CICLOS */
  while (sumartotal != 0) {
    medioDePago = prompt(`
      Seleccione medio de pago:
      1 para efectivo 
      2 para tarjeta de debito
      3 para tarjeta de credito con interes del 10% 
      4 para tarjeta de credito en 3 cuotas con 15% de interes`);

    if (
      medioDePago == 1 ||
      medioDePago == 2 ||
      medioDePago == 3 ||
      medioDePago == 4
    ) {
      switch (medioDePago) {
        case "1":
          if (sumartotal >= 18000) {
            sumartotal = (sumartotal * 0.9).toFixed(2);
            alert(`Tiene un 10% de descuento en sus servicios y debera pagar $${sumartotal}.
            Que tenga un buen dia!`);
          } else {
            alert(`Debera pagar $${sumartotal}.
            Que tenga un buen dia!`);
          }

          break;
        case "2":
          sumartotal = sumartotal.toFixed(2);
          alert(`Debera pagar $${sumartotal}.
            Que tenga un buen dia!`);
          break;
        case "3":
          total = (sumartotal * 1.1).toFixed(2);

          alert(`Deberas pagar $${total}.
            Que tenga un buen dia!`);
          break;
        case "4":
          total = (sumartotal * 1.15).toFixed(2);
          cuotas = (total / 3).toFixed(2);
          alert(`Deberas pagar 3 cuotas de $${cuotas}.
             El total seria de $${total}.
            Que tenga un buen dia!`);
          break;
      }
      break;
    } else {
      alert("Debe ingresar un medio de pago valido");
      continue;
    }
  }
}

/* SELECCIONAR SERVICIOS */
function agendarTurno() {
  while (true) {
    compra = prompt(`seleccione lo servicios que quiera realizarse:
1 para Semipermanente 
2 para Acrilicas 
3 para Capping 
4 para Masajes
0 si desea terminar de seleccionar`);

    if (compra === "0") {
      alert(`el total es : $${sumartotal}`);
      break;
    } else if (compra == 1) {
      precio = servicio1.precio;
      sumartotal += precio;
      sumaSemi += 1;
    } else if (compra == 2) {
      precio = servicio2.precio;
      sumartotal += precio;
      sumaAcri += 1;
    } else if (compra == 3) {
      precio = servicio3.precio;
      sumartotal += precio;
      sumaCapp += 1;
    } else if (compra == 4) {
      precio = servicio4.precio;
      sumartotal += precio;
      sumaMasajes += 1;
    } else {
      alert("opcion invalida, reintente");
      continue;
    }
    alert(`El servicio fue agregado correctamente`);
  }
}
class Productos {
  constructor(id, nombre, precio, disponibilidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
  }
}
const producto1 = new Productos(1, "Esmalte tradicional", 2000, true);
const producto2 = new Productos(2, "Crema de mano", 1500, true);
const producto3 = new Productos(3, "Crema facial para el dia", 4500, true);
const producto4 = new Productos(4, "Perfume femenino", 9000, true);
const producto5 = new Productos(5, "Perfume masculino ", 8500, true);
const producto6 = new Productos(6, "Crema humectante para pies ", 1500, true);
const producto7 = new Productos(7, "Crema facial para la noche", 5000, true);

const catalogoProductos = [];
catalogoProductos.push(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7
);
/*  NO LO PUEDO HACER FUNCIONAR EL CATALOGO.
EN LUGAR DE APARECERME EN NOMBRE DEL PRODUCTO Y EL PRECIO ME APARECEN MUCHAS ,,,,,,,, */
function mostrarCatalogo(array) {
  const produtoNombre = array.map((producto) => {
    producto.nombre;
  });
  const productoPrecio = catalogoProductos.map((elemento) => {
    elemento.precio;
  });
  alert(
    `Nuestros productos disponibles son estos: ${produtoNombre} y su precio es $${productoPrecio}`
  );
}
/* SEGUNDA FORMA QUE INTENTE PARA VER EL CATALOGO, 
PERO ME MUESTRA 1 ALERT POR CADA PRODUCTO Y YO BUSCO QUE ME APAREZCA 1 PARA TODOS */
function mostrarCatalogo2 (array){
  array.forEach((producto) => {alert(`Nuetros productos disponibles son: ${producto.nombre} $${producto.precio}`)
});
}
/* CARRITO */
const carrito = [];

/* Menu Inicial */
function menu() {
  let salirMenu = false;

  do {
    let opcionIngresada = parseInt(
      prompt(`Ingrese la opción deseada
      1 - Agendar un turno
      2 - Ver productos
      3 - Ver carrito
      0 - Salir del menu`)
    );
    switch (opcionIngresada) {
      case 1:
        agendarTurno();
        mostrarResultados();

        break;
      case 2:
        /* OPCION DEL CATALOGO INTERCAMBIAR LA FUNCION PARA VER EL ERROR */
        mostrarCatalogo2(catalogoProductos);
        break;
      case 3:
        verCarrito();
        break;
      case 0:
        console.log(`Gracias por utilizar nuestra app. Saludos!`);
        salirMenu = true;
        break;
      default:
        console.log("Opción no válida, ingrese alguna presente en el menu");
        break;
    }
  } while (!salirMenu);
}

menu();
