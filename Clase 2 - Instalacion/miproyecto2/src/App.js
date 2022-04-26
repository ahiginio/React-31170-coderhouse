

function App() {
  /* ----------------------------- Spread operator ---------------------------- */
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const array2 = [...array1, 11, 12, 13, 14, 15];
  //console.log(array2)

  // Destructuring con objeto
   const objeto = {
    id: 1,
    nombre: "Agustin"
  }
  const { nombre } = objeto;
  console.log(nombre) 
  /// Esto es lo mismo que realizar console.log(objecto.nombre)
  
  // Destructuring con array
  const array3 = [
    {
      id: 1,
      title: "Agustin"
    },
    {
      id: 2,
      title: "Juan"
    }
  ]
  const { title } = array3[1];
  console.log(title)
  const contenedorStyle = {
    backgroundColor: "#ccc"
  }
  return (
    // <div style="border-color: red" class="App"></div>
    <div style={contenedorStyle} className="App">
      <h1>Esta es mi primer aplicacion en React.JS</h1>
      <p>Accedo a la propiedad Title del objecto en el array con posicion 1 {title}</p>
      <p>Accedo a la propiedad Nombre del objeto {nombre}</p>
      <h2>Imprimo mi array</h2>
      {array3.map((persona) => (
        <p>{persona.title}</p>
      ))}
    </div>
  );
}

export default App;
