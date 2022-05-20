import React from "react"
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import {CartContext} from "../../context/CartContext"
/* --------------- Declaracion de nuestro functional component -------------- */
export default function AddButton({count, setCount, stock, onSubmit}) {

  
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
  
  /* ------------------------- Componente presentacion ------------------------ */
  const StockButton = ({ handleOnClick, text }) => {
    return <Button className="stock-button" onClick={() => handleOnClick()}>{text}</Button>;
  };
  /* ------------------------- Componente presentacion ------------------------ */
  const AddButton = ({handleOnSubmit}) => {
    return <Button className="btn add-button" onClick={() => handleOnSubmit()}>Añadir al carrito</Button>;
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