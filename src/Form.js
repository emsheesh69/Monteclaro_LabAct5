import { useState } from "react";

function Form({ onAddItem }) {
  //states
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div className="contained">
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 100 }, (_, n) => n + 1).map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Place an item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button>Get it!</button>
      </form>
    </div>
  );
}

export default Form;
