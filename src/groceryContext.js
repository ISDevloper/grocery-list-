import React, { useState } from "react";

export const GroceryContext = React.createContext();

export const GroceryProvider = (props) => {
  const [grocery, setGrocery] = useState([
    {
      id: 1232,
      groceryCentent: "Milk",
    },
    {
      id: 2213,
      groceryCentent: "Meat",
    },
    {
      id: 3765,
      groceryCentent: "Coffee",
    },
  ]);

  const [buttonAction, setbuttonAction] = useState("add");

  const [manipulatedItem, setManipulatedItem] = useState({
    id: "",
    groceryCentent: "",
  });
  return (
    <GroceryContext.Provider
      value={[
        grocery,
        setGrocery,
        buttonAction,
        setbuttonAction,
        manipulatedItem,
        setManipulatedItem,
      ]}
    >
      {props.children}
    </GroceryContext.Provider>
  );
};

export const inputState = React.createContext();
