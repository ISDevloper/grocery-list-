import { useContext } from "react";
import { GroceryItem } from "./groceryItem";
import { GroceryContext } from "./groceryContext";

export const GroceryList = () => {
  const [
    grocery,
    setGrocery,
    buttonAction,
    setButtonAction,
    manipulatedItem,
    setManipulatedItem,
  ] = useContext(GroceryContext);
  return (
    <div>
      {grocery.map((item) => {
        return <GroceryItem key={item.id} groceryItem={item} />;
      })}
    </div>
  );
};

export default GroceryList;
