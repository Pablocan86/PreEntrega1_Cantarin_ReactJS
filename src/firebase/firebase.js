import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUVjBP12frs6AGeRQerDg0g6vejDgVI9k", //quitar para mandar por privado al profe
  authDomain: "pfcantarin-reactjs.firebaseapp.com",
  projectId: "pfcantarin-reactjs",
  storageBucket: "pfcantarin-reactjs.appspot.com",
  messagingSenderId: "701532611943",
  appId: "1:701532611943:web:9d1ca8fd98cda9aacf7bc2",
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore();

const prods = [
  {
    title: "Colchón Dual",
    size: "190x140",
    price: 412350.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/1.jpg?alt=media&token=7e8a065f-5e98-4bc7-8046-f12c87149989",
    category: "dos-plazas",
  },
  {
    title: "Colchón Renovation Pillow Top",
    size: "190x140",
    price: 617131.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/2.jpg?alt=media&token=3d1ae620-ddbb-4e17-b923-057c827d7166",
    category: "dos-plazas",
  },
  {
    title: "Colchón Princess",
    size: "190x080",
    price: 186715.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/3.jpg?alt=media&token=a0c76c89-781b-42d3-b8ad-54061f48de8c",
    category: "una-plaza",
  },
  {
    title: "Colchón Támesis",
    size: "190x100",
    price: 216653.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/4.jpg?alt=media&token=b0a2cc43-1d9e-42a6-8a97-0eec81c10a6e",
    category: "una-plaza",
  },
  {
    title: "Colchón Especial de Lujo",
    size: "190x080",
    price: 114622.01,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/5.jpg?alt=media&token=39c823b4-e09f-414a-b7d5-8648f82c38e9",
    category: "una-plaza",
  },
  {
    title: "Colchón Compac Plus",
    size: "190x140",
    price: 369054.01,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/6.png?alt=media&token=7db87e50-97d9-49c2-8812-bacee82fd687",
    category: "dos-plazas",
  },
  {
    title: "Colchón Disney Multipixar Cuna",
    size: "60x120",
    price: 35686.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/7.jpg?alt=media&token=192b1e8b-906c-4b7a-82f5-f9832f45dd38",
    category: "chicos",
  },
  {
    title: "Colchón Disney Frozen",
    size: "190x080",
    price: 109824.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/8.jpg?alt=media&token=272f321e-5bc9-4ae8-b5ae-39af0c2057a7",
    category: "chicos",
  },
  {
    title: "Colchón Marvel Spiderman",
    size: "190x080",
    price: 109824.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/9.jpg?alt=media&token=84a8722b-eaa7-4991-8a11-a6d86dc27c1c",
    category: "chicos",
  },
  {
    title: "Almohada Platino",
    size: "090x040",
    price: 16493.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/10.jpg?alt=media&token=e2c33e0f-d8db-44da-867c-29ba98941e54",
    category: "almohadas",
  },
  ,
  {
    title: "Almohada Doral",
    size: "070x050",
    price: 17550.0,
    stock: 20,
    img: "https://firebasestorage.googleapis.com/v0/b/pfcantarin-reactjs.appspot.com/o/11.jpg?alt=media&token=d7df2901-32d0-459e-8752-67b6eec6d4ec",
    category: "almohadas",
  },
];

export const createProducts = async () => {
  prods.forEach(async (prod) => {
    const rta = await addDoc(collection(bdd, "productos"), {
      title: prod.title,
      size: prod.size,
      price: prod.price,
      stock: prod.stock,
      img: prod.img,
      category: prod.category,
    });
  });
};
//Consultar Productos

export const getProducts = async () => {
  const productos = await getDocs(collection(bdd, "productos"));
  const items = productos.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

//Consultar Producto
export const getProduct = async (id) => {
  const producto = await getDoc(doc(bdd, "productos", id));
  const item = { ...producto.data(), id: producto.id };
  return item;
};

//Actualizar Producto

export const updateProduct = async (id, info) => {
  await updateDoc(doc(bdd, "productos", id), info);
};

//Eliminar Producto

export const deleleProduct = async (id) => {
  await deletDoc(doc(bdd, "productos, id"));
};

//Cread and Read de ordenes de compra

export const createOrderBuys = async (customer, totalPrice, cart, date) => {
  const orderBuys = await addDoc(collection(bdd, "ordersBuys"), {
    customer: customer,
    items: cart,
    totalPrice: totalPrice,
    date: date,
  });
  return orderBuys;
};

export const getOrderBuys = async (id) => {
  const orderBuys = await getDoc(doc(bdd, "ordersBuys", id));
  const item = { ...orderBuys.data(), id: orderBuys.id };
  return item;
};
