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
        <Button className="bg-blue-500 border-2 border-black px-4 py-2 rounded flex items-center gap-2 font-bold text-white text-lg">
          <FaBitcoin /> Buy now!
        </Button>
        <Button
          onClick={handleLoginWithGoogle}
          className="bg-white text-green-500 font-bold border-2 border-black px-4 py-2 rounded flex items-center gap-2 text-lg"
        >
          <FcGoogle /> Log in with Google
        </Button>
      </div>
    </main>
  );
}

export default App;
