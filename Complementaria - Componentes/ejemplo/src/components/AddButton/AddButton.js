import React from "react"
import { toast } from "react-toastify"

/* --------------- Declaracion de nuestro functional component -------------- */
export default function AddButton() {
  /* ----------------------- Declaracion del state hook ----------------------- */
  const [count, setCount] = React.useState(1)
  const stock = 5
  
  /* -------------- Declaracion de un Efecto sobre nuestra cuenta ------------- */
  React.useEffect(() => {
    if(count !== 1) {
      alert("Cambiaste el stock de un producto")
    }
  },[count])

  /* -------------------- Funcion para aumentar la cantidad ------------------- */
  const onAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  /* ------------------- Funcion para disminuir la cantidad ------------------- */
  const onDecrease = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  /* ---------------------- Funcion de Agregar al carrito --------------------- */
  const onSubmit = () => {
    toast.success(`Se agregaron ${count} unidades al carrito`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  /* ------------------------- Componente presentacion ------------------------ */
  const StockButton = ({ handleOnClick, text }) => {
    return <button className="stock-button" onClick={() => handleOnClick()}>{text}</button>;
  };
  /* ------------------------- Componente presentacion ------------------------ */
  const AddButton = ({handleOnSubmit}) => {
    return <button className="add-button" onClick={() => handleOnSubmit()}>Añadir al carrito</button>;
  };

  return (
    <div className="add-button-container">
      <StockButton text="-" handleOnClick={onDecrease}/>
      <span className="add-button-count">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/>
      <AddButton handleOnSubmit={onSubmit} />
    </div>
  );
}