import React from "react"
function App() {
  /* -------------------------------- Ejemplo 1 ------------------------------- */
  const [user, setUser] = React.useState("")
  const [password, setPassword] = React.useState("")

  
  /* -------------------------------- Ejemplo 2 ------------------------------- */
  const [formValues, setFormValues] = React.useState({
    user: "",
    password: "",
    address: "",
  })
  
  /* --------- Funcion que captura y guarda los valores de los inputs (Ejemplo 2) --------- */
  const handleOnChange = (event) => {
    const {name, value} = event.target
    setFormValues({...formValues, [name] : value})
  }

  /* ------------------ Como cancelar comportamiento por defecto de un evento ----------------- */
  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault()
    event.stopPropagation()
    alert(`Bienvenido ${user}`)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* -------------------------------------------------------------------------- */
        /*                                 EJEMPLO N 1                                */
        /* -------------------------------------------------------------------------- */}
        {/*         <label>Usuario</label>
        <input name="user" type="text" onChange={(e) => setUser(e.target.value)} />
        <label>Contraseña</label>
        <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <label>Direccion</label> */}

        {/* -------------------------------------------------------------------------- */
        /*                                 Ejemplo N 2                                */
        /* -------------------------------------------------------------------------- */}
        <label>Usuario</label>
        <input name="user" type="text" onChange={handleOnChange} />
        <label>Contraseña</label>
        <input name="password" type="password" onChange={handleOnChange} />
        <label>Direccion</label>
        <input name="address" type="text" onChange={handleOnChange} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
