import "./App.css";
import Header from "./Header.js";
import Form from "./Form.js";
import Itemlist from "./ItemList";
import { useState } from "react";
import Footer from "./Footer.js";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "Name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items.slice().sort((a, b) => Number(b.number));
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDel(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleChe(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Sure ka na ba");
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div>
      <Header />
      <Form onAddItem={handleAddItems} />
      <Itemlist
        //items={items}
        items={sortedItems}
        onDeleteItem={handleDel}
        onCheckItem={handleChe}
      />
      <div className="selection">
        <button className="clear" onClick={handleClearList}>
          Clear
        </button>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Input</option>
          <option value="Name">Name</option>
          <option value="checked">Status order</option>
        </select>
      </div>
      <Footer items={items} />
    </div>
  );
}

export default App;
