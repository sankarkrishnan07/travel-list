import Item from "./Item";

export default function Packinglist({ items, onToggle, onDelete, sortby }) {
  let sortedItems;

  sortby === "input"
    ? (sortedItems = items)
    : sortby === "quantity"
    ? (sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity))
    : sortby === "description"
    ? (sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description)))
    : (sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed)));

  return sortedItems.map((item) => (
    <Item item={item} key={item.id} onToggle={onToggle} onDelete={onDelete} />
  ));
}
