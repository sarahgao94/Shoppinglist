import React from "react";

const Items = ({ items, deleteItems }) => {
  const itemsList = items.length ? (
    items.map((item) => {
      return (
        <div className="collection-item" key={item.id}>
          <ul className="center">
            <li
              onClick={() => {
                deleteItems(item.id);
              }}
            >
              {item.content}
            </li>
          </ul>
        </div>
      );
    })
  ) : (
    <p className="center">You have no more stuff buy</p>
  );
  return <div className="items collection">{itemsList}</div>;
};
export default Items;
