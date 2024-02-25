import { useRef } from "react";

export const Checkout = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const data = Object.fromEntries(datForm);
    console.log(data);
    e.target.reset();
  };
  return (
    <div className="checkout">
      <form
        action=""
        ref={formRef}
        onSubmit={handleSubmit}
        className="checkout_form"
      >
        <label className="">Nombre: </label>
        <input type="text" className="" name="nombre" />
        <label className="">Apellido: </label>
        <input type="text" className="" name="apellido" />
        <label className="">Dirección: </label>
        <input type="text" className="" name="direccion" />
        <label className="">DNI: </label>
        <input type="number" className="" name="dni" />
        <label className="">Email: </label>
        <input type="email" className="" name="email" />
        <label className="">Teléfono: </label>
        <input type="phone" className="" name="phone" />
        <button type="submit" className="">
          Finalizar
        </button>
      </form>
    </div>
  );
};
