import { useState } from "react";
import { GroceryForm } from "./addGroceryForm";
import { GroceryList } from "./groceryList";
import { GroceryProvider } from "./groceryContext";

var action = "add";

export const App = () => {
  return (
    <GroceryProvider>
      <div className="w-1/2 mx-auto mt-24">
        <GroceryForm />
        <GroceryList />
      </div>
    </GroceryProvider>
  );
};

export default App;
