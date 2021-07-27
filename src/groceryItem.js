import { useContext } from "react";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { GroceryContext } from "./groceryContext";
export const GroceryItem = (props) => {
  const [grocery, setGrocery, setButtonAction, setManipulatedItem] =
    useContext(GroceryContext);

  const triggerEdit = () => {
    setButtonAction("edit");
    setManipulatedItem(props.groceryItem);
  };

  const deleteItem = () => {
    setGrocery(
      grocery.filter((groceryItem) => {
        if (groceryItem.id !== props.groceryItem.id) return groceryItem;
      })
    );
  };
  return (
    <div className="grocery-item">
      <h3 className="font-bold">{props.groceryItem.groceryCentent}</h3>
      <div>
        <button type="button" className="btn" onClick={triggerEdit}>
          <AiFillEdit
            style={{ width: "18px", height: "auto", cursor: "pointer" }}
          />
        </button>
        <button type="button" onClick={deleteItem} className="btn">
          <AiOutlineDelete
            style={{
              width: "18px",
              height: "auto",
              cursor: "pointer",
              color: "red",
              marginLeft: "18px",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default GroceryItem;
