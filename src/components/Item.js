export default function Item({ item, onToggle, onDelete }) {
    return (
      <li className="item">
        <input
          type="checkbox"
          name="isopen"
          value={item.packed}
          onChange={() => onToggle(item.id)}
        />
        <div
          className="item__det"
          style={item.packed ? { textDecoration: "line-through" } : {}}
        >
          <span className="quantity">{item.quantity}</span>
          <span className="description">{item.description}</span>
        </div>
        <button onClick={() => onDelete(item.id)}>❌</button>
      </li>
    );
  }
  