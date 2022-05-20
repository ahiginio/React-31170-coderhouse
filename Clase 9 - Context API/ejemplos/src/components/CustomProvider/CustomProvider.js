import React, { createContext } from "react"

export const contexto = createContext()
//Provider : Se encarga de establecer el valor del contexto y darle ese valor a todos los otros componentes
const Provider = contexto.Provider
//useContext : Se encarga de obtener el valor del contexto

export default function CustomProvider({children}) {

  const [carrito, setCarrito] = React.useState([])

  //console.log(carrito)

  const agregarProductoAlCarrtio = () => {
    //todaLaLogicaArmada
  }

  const eliminarProductoDelCarrito = () => {}

  //emptyCart
  const vaciarCarrito = () => {
    setCarrito ([])
  }

  //isInCart : devuelve true si el producto esta en el carrito o false si no esta
  const estaEnCarrito = () => {}

  const valorDelContexto = {
    carrito: carrito,
    //setCarrito: setCarrito
    agregarProductoAlCarrtio : agregarProductoAlCarrtio
  }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}