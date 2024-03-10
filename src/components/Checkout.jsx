import { useRef } from "react";
import { useCartContext } from "../context/CartContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createOrderBuys,
  getOrderBuys,
  getProduct,
  updateProduct,
} from "../firebase/firebase.js";

export const Checkout = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const { cart, totalPrice, emptyCart } = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const customer = Object.fromEntries(datForm);

    const aux = [...cart];

    aux.forEach((prodCart) => {
      getProduct(prodCart.id).then((prodBDD) => {
        if (prodBDD.stock >= prodCart.quantity) {
          prodBDD.stock -= prodCart.quantity;
          updateProduct(prodBDD.id, prodBDD);
        } else {
          toast.info(
            `El producto ${prodBDD.title} no se puede adquirir por falta de stock`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );

          aux.filter((prod) => prod.id != prodBDD.id); //Elimina producto de carrito por no tener stock
        }
      });
    });
    const aux2 = aux.map((prod) => ({
      id: prod.id,
      quantity: prod.quantity,
      price: prod.price,
    }));
    createOrderBuys(
      customer,
      totalPrice(),
      aux2,
      new Date().toLocaleDateString("es-AR", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
    )
      .then((orderBuys) => {
        toast.success(
          `🛒 Muchas gracias por comprar con nosotros, us ID de compra es: ${
            orderBuys.id
          } por un total de $ ${totalPrice()}. En breves no contactaremos para coordinar el medio de pago y la entrega.`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
        emptyCart();
        e.target.reset();
        navigate("/");
      })
      .catch((e) => {
        toast.error(`Error al generar orde de la compra: ${e}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h4>Para finalizar compra debe tener productos en el carrito</h4>
          <Link to="/">
            <button className="">Volver a inicio</button>
          </Link>
        </>
      ) : (
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
      )}
    </>
  );
};
