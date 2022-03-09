import React, { useState } from "react";
import "./styles.css";

// This program should allow the user to input items
// and add them to their shopping carts
// 1. Complete the handleClick function so that it adds an
// item to the cart when the button is clicked.
// (HINT: you will need to use props!)
// 2. Pass the handleClick function into the button onClick.
// 3. Use map to show items from the state variable named "cartList"
// as list items in the unordered list.

function App() {
  const [cartList, setCartList] = useState([]);
  const arr = [1, 2, 3];
  arr.map((num) => console.log(num));
  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <ul className="cart">
        {cartList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <AddItem onAddItem={(item) => setCartList([...cartList, item])} />
    </div>
  );
}

function AddItem(props) {
  const [item, setItem] = useState("");

  return (
    <div>
      <input onChange={(event) => setItem(event.target.value)} />
      <button onClick={() => handleClick()}>Add to cart</button>
    </div>
  );

  function handleClick() {
    return props.onAddItem(item);
  }
}

export default App;
