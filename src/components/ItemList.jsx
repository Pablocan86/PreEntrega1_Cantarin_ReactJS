import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </>
  );
};
