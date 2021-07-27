import React, { useState, useContext, useEffect } from "react";
import { GroceryContext } from "./groceryContext";

export const GroceryForm = () => {
  const inputRef = React.createRef();

  const [inputGrocery, setInputGrocery] = useState("");
  const [
    grocery,
    setGrocery,
    buttonAction,
    setButtonAction,
    manipulatedItem,
    setManipulatedItem,
  ] = useContext(GroceryContext);

  const handleInputChange = (event) => {
    setInputGrocery(event.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (buttonAction === "add") {
      var randomId = Math.floor(Math.random() * 10000);
      setGrocery((prevGrocery) => {
        return [...prevGrocery, { id: randomId, groceryCentent: inputGrocery }];
      });
    } else if (buttonAction === "edit") {
      setButtonAction("add");
      var updatedGrocery = grocery.map((groceryItem) => {
        if (groceryItem.id === manipulatedItem.id) {
          groceryItem.groceryCentent = inputGrocery;
        }
        return groceryItem;
      });
      console.log(updatedGrocery);
      setGrocery([...updatedGrocery]);
    }

    inputRef.current.value = "";
  };

  useEffect(() => {
    inputRef.current.value = manipulatedItem.groceryCentent;
  }, [manipulatedItem]);
  return (
    <form onSubmit={submitHandle} className="grocery-form">
      <input
        type="text"
        placeholder="Please type your grocery"
        className="grocery-input"
        name="grocery"
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button type="submit" className="grocery-button">
        {buttonAction}
      </button>
    </form>
  );
};

export default GroceryForm;
