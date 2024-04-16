function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked).length;
  return (
    <div>
      <p className="paa">
        You have {items.length} item in your list, and you already completed
        {completedItem}
      </p>
      {""}
    </div>
  );
}

export default Footer;
