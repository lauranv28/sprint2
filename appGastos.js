const pagos = [];
const personas = [];
const listado = document.getElementById("list-group");
const resultadoTotal = document.getElementById("total");
const persona = document.getElementById("nombre");
const pago = document.getElementById("pago");

function repartirGastos() {
  agregarMonto();
  mostrarUltimoMonto();
  mostrarPagoIndividual();
}

function agregarMonto() {
  personas.push(persona.value);
  pagos.push(pago.value);
}

function mostrarUltimoMonto() {
  const li = document.createElement("li");
  const text = document.createTextNode(
    personas[personas.length - 1] + ": $" + pagos[pagos.length - 1]
  );
  li.classList.add("list-group-item");
  li.appendChild(text);
  listado.appendChild(li);
}

function sumar(pagos) {
  let suma = 0;
  for (let pago of pagos) {
    suma += Number(pago);
  }
  return suma;
}

function mostrarPagoIndividual() {
  const total = sumar(pagos);
  const pagoIndividual = total / personas.length;
  resultadoTotal.innerText =
    "Total: $" +
    total +
    "\nA cada uno le toca aportar: $" +
    pagoIndividual.toFixed(2);
}
