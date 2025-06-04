import { FaBitcoin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Button from "./components/Button";
import Avatar from "./components/Avatar";
import Menu from "./components/menu/Menu";
import MenuButton from "./components/menu/MenuButton";
import MenuDropdown from "./components/menu/MenuDropdown";
import MenuItem from "./components/menu/MenuItem";

function App() {
  const handleLoginWithGoogle = () => {
    console.log("Logging in...");
  };
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
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
      <section className="mt-10 flex justify-center items-center gap-3">
        <Avatar src="../avatar.jpg" alt="Avatar image" />

        <Avatar>BZ</Avatar>

        <Avatar />
      </section>
      <div className="flex-center mt-10">
        <Menu>
          <MenuButton>Sports</MenuButton>
          <MenuDropdown>
            {sports.map((sport) => (
              <MenuItem key={sport}>{sport}</MenuItem>
            ))}
          </MenuDropdown>
        </Menu>
      </div>
    </main>
  );
}

export default App;
