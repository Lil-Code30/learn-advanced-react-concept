import { FaBitcoin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Button from "./components/Button";

function App() {
  const handleLoginWithGoogle = () => {
    console.log("Logging in...");
  };

  return (
    <main className="flex flex-col justify-center item-center md:w-2/3 w-[90%] mx-auto mt-10">
      <div className="grid grid-cols-2 gap-4">
        <Button variant="danger" className="button">
          <FaBitcoin /> Buy now!
        </Button>
        <Button
          variant="success"
          onClick={handleLoginWithGoogle}
          className="button"
        >
          <FcGoogle /> Log in with Google
        </Button>
        <Button className="button" variant="warning">
          Hack me
        </Button>
      </div>
    </main>
  );
}

export default App;
