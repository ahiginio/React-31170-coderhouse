import React from "react"
export default function App2 () {
  /* --------------------------------- Acciion -------------------------------- */
  const [action, setAction] = React.useState("comprar")
  console.log(action)
  const handleFunction = () => {
    if(action === "comprar") 
      setAction("carrito")
    if(action === "carrito") 
      setAction("comprar")
    
  }

  /* ------------------------------- Componente ------------------------------- */
  const AddToCart = ({ text}) => (
    <button onClick={handleFunction}>{text}</button>
  );

  /* ----------------------------- Otro componente ---------------------------- */
  const GoToCart = ({ text }) => (
    <button onClick={handleFunction}>{text}</button>
  );

  /* ------------------------------- Condicional ------------------------------ */
  //const Button = action === "comprar" ? AddToCart : GoToCart
  const Button = ({ handleOnClick, text }) => {
    return <button onClick={handleOnClick}>{text}</button>;
  };
  
  /* ----------------------------------- JSX ---------------------------------- */
  return (
    <div style={{ marginTop: 50 }}>
      <Button text="HOLA"></Button>

      {action === "comprar" ? <AddToCart /> : <GoToCart />}
      <Button text={"Comprar"} handleOnClick={() => alert("Compraste")} />
      <Button text={"Ir al carrito"} handleOnClick={() => alert("/carrito")} />
      <Button
        text={"Ir a categoria"}
        handleOnClick={() => alert("/categoria/3")}
      />
    </div>
  );
}






