import Item from "./Item";

function ItemList({ items, onDeleteItem, onCheckItem }) {
  console.log(items);

  return (
    <div id="Orderlist">
      <ul className="todoL">
        {items.map((item) => (
          <Item
            ItemList={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
