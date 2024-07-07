import { useState } from "react";

export default function Form({ onAdd, onClear, sortby, setSortby }) {
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("");
  
    return (
      <form  onSubmit={(e)=>onAdd(e,quantity,description,setDescription,setQuantity)}>
        <p>What do you need for your trip?</p>
        <select
          name="itemcount"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option value={i} key={i}>
              {i}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="itemname"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
  
        <select name="sort" value={sortby} onChange={e=>setSortby(e.target.value)} >
          <option value="input">Sort by Input Order</option>
          <option value="quantity">Sort by Quantity</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onClear}>CLEAR LIST</button>
      </form>
    );
  }