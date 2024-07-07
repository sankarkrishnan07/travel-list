export default function Footer({ items }) {
  const itemsPacked = items.filter(item => item.packed).length;
  return <footer className="footer">
    <p className="status">{items.length < 1 ? "Start adding items to your packing list" : `You have ${items.length} in your packing list and you have already packed ${itemsPacked}, (${Math.round((itemsPacked / items.length) * 100)}%)`}</p>
  </footer>;

}
