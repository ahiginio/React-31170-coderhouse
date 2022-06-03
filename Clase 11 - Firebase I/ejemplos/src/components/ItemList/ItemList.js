import Item from "../Item/Item";

export default function ItemList ({items}) {
  return (
    items.map((item, index) => (<Item key={item.id} item={item} />))
  );
}