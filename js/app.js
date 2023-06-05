const semi = 4000;
const acri = 7500;
const capp = 5000;
const masajes = 2400;
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

let contacto = prompt(
  "Ingrese su numero de telefono para poder comunicarnos con usted"
);

function mostrarResultados() {
  alert(`Servicios seleccionados:
  ${sumaSemi} Semipermanente
  ${sumaAcri} Acrilico
  ${sumaCapp} Capping
  ${sumaMasajes} Masajes
  el total de los servicios es de $${sumartotal}.`);

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

while (true) {
  compra = prompt(`seleccione lo servicios que quiera realizarse:
1 para Semipermanente 
2 para Acrilicas 
3 para Capping 
4 para Masajes
y "fin" si desea terminar de seleccionar`);

  if (compra == "fin" || compra == "FIN") {
    alert(`el total es : $${sumartotal}`);
    break;
  } else if (compra == 1) {
    precio = 4000;
    sumartotal += precio;
    sumaSemi += 1;
  } else if (compra == 2) {
    precio = 7500;
    sumartotal += precio;
    sumaAcri += 1;
  } else if (compra == 3) {
    precio = 5000;
    sumartotal += precio;
    sumaCapp += 1;
  } else if (compra == 4) {
    precio = 2400;
    sumartotal += precio;
    sumaMasajes += 1;
  } else {
    alert("opcion invalida, reintente");
    continue;
  }
  alert(`el total es : $${sumartotal}.`);
}

mostrarResultados();
alert(
  `En la breve nos comunicaremos con usted al ${contacto} para coordinar dia y horario para el turno \n Muchas gracias`
);
