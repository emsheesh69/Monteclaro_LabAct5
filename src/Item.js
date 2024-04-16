import Itemlist from "./ItemList";

function Item({ ItemList, onDeleteItem, onCheckItem }) {
  return (
    <div className="todoo">
      <li className="lister">
        {ItemList.isChecked === false ? (
          <h5>{ItemList.quantity + " " + ItemList.name}</h5>
        ) : (
          <s>{ItemList.quantity + " " + ItemList.name}</s>
        )}
      </li>
      <button className="Tresh" onClick={() => onDeleteItem(ItemList.id)}>
        Trash
      </button>
      <button className="Czech" onClick={() => onCheckItem(ItemList.id)}>
        {Itemlist.isChecked ? "checker" : <i className="faze"></i>}Check
      </button>
    </div>
  );
}

export default Item;
