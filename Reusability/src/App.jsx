import { FaBitcoin } from "react-icons/fa6";

import Button from "./components/Button";

function App() {
  return (
    <main className="flex flex-col justify-center item-center w-2/3 mx-auto mt-10">
      <div>
        <Button>
          <FaBitcoin /> Buy now!
        </Button>
      </div>
    </main>
  );
}

export default App;
