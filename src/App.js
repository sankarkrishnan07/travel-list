import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Logo from "./components/Header";
import Form from "./components/Form";
import Packinglist from "./components/PackingList";


function App() {
  const [items, setItems] = useState([]);
  const [sortby, setSortby] = useState("input");

  function onToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function onDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function onAdd(e, quantity, description, setDescription, setQuantity) {
    e.preventDefault();
    if (!description) return;
    setItems([
      ...items,
      { id: Date.now(), quantity, description, packed: false },
    ]);

    setQuantity(1);
    setDescription("");
  }

  function onClear() {
    setItems([]);
  }

  return (
    <div className="container">
      <Logo />
      <Form
        onAdd={onAdd}
        onClear={onClear}
        items={items}
        sortby={sortby}
        setSortby={setSortby}
      />
      <Packinglist
        onToggle={onToggle}
        onDelete={onDelete}
        items={items}
        sortby={sortby}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
