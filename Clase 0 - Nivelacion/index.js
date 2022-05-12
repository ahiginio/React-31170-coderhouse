/* ------------------------ Declaracion de variables ------------------------ */
const numA = 25
const numB = 70

/* ------------------------ Funcion normal con return ----------------------- */
function suma () {
  
  return numA + numB
  
}
console.log(suma())

/* ----------------------- Funcion con params y return ---------------------- */
function sumaB (numA,numB) {
  return numA + numB
}
console.log(sumaB(10, 15))

/* ----------------------------- Arrow function ----------------------------- */
const sumaC = () => {
  return numA + numB;
}
console.log(sumaC())

/* ------------------------ Arrow function con params ----------------------- */
const sumaD = (numA, numB) => {
  return numA + numB
}
console.log(sumaD(10,25));

/* -------------------------- Declaracion de array -------------------------- */
const array = [
  {
    nombre: "agustin"
  },
  {
    nombre: "diego"
  },
  {
    nombre: "mario"
  }
]

/* ---------------------------- Manejo de arrays ---------------------------- */
const arrayFilter = array.filter((alumno) => alumno.nombre === "agustin")
console.log(arrayFilter)

const arrayMap = array.map((alumno) => {
  console.log(`Hola ${alumno.nombre}`)
})

/* -------------------- Agrego un valor al array con es5 -------------------- */
const nuevoArray = [...array]
nuevoArray.push({nombre: "Diego"})

/* --------------------- Agrego valor a un array con es6 -------------------- */
console.log([...array, {nombre: "Diego"}])

/* ------------------------------ Condicionales ----------------------------- */
const nombre = "Agustin"
const apellido = "Higinio"

//es5 if / else
if(nombre === "Agustin") {
  console.log("Si cumple")
} else {
  console.log("No cumple")
}

//es6 ternary operator
nombre === "Agustin" && console.log("Es el nombre") 
console.log(nombre === "Agustin" && apellido === "Gonzalez" ? "Si cumple" : "No cumple")