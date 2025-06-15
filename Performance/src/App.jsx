import React from "react";
import ReactDOM from "react-dom/client";

import Product from "./components/Product";
import Timer from "./components/Timer";

// import ProductsList from "./components/ProductsList"

const ProductsList = React.lazy(() => {
  return import("./components/ProductsList");
});

function App() {
  const [count, setCount] = React.useState(0);
  const [showTimer, setShowTimer] = React.useState(false);
  const [showProducts, setShowProducts] = React.useState(false);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function toggleTimer() {
    setShowTimer((prev) => !prev);
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
      </button>
      <button className="button" onClick={increment}>
        +
      </button>
      <br />
      <br />
      <button
        className="button w-[200px]"
        onClick={() => setShowProducts((prev) => !prev)}
      >
        Show Products
      </button>
      <br />
      <br />
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <div className="products-list">{showProducts && <ProductsList />}</div>
      </React.Suspense>
      <div className="mt-5 w-[200px]">
        <button className="button w-full" onClick={toggleTimer}>
          {showTimer ? "Hide" : "Show"} Timer
        </button>
        {showTimer && <Timer />}
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
