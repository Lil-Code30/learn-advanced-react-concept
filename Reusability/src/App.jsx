import React from "react";

import { FaBitcoin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import Button from "./components/Button";
import Avatar from "./components/Avatar";
import Decision from "./components/Decision";
import Menu from "./components/menu/Menu";
import MenuButton from "./components/menu/MenuButton";
import MenuDropdown from "./components/menu/MenuDropdown";
import MenuItem from "./components/menu/MenuItem";

function App() {
  const handleLoginWithGoogle = () => {
    console.log("Logging in...");
  };
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  // understanding refs
  const [on, setOn] = React.useState(false);
  const renderCount = React.useRef(0); // { current: 0 } refs is a mutable object with key current and value 0

  function forceRender() {
    setOn((prevOn) => !prevOn);
  }
  function incrementRenderCount() {
    renderCount.current++;
  }
  React.useEffect(() => {
    renderCount.current++;
  });

  // understanding refs with DOM manipulation
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);
  const inputRef = React.useRef(null);

  function addProjectIdea(e) {
    e.preventDefault();

    if (!text) return;

    setList((prevList) => [...prevList, text]);
    setText("");

    inputRef.current.focus();
  }

  return (
    <main className="flex flex-col justify-center item-center md:w-2/3 w-[90%] mx-auto my-10">
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
      <div className="mt-10 flex-center flex-col">
        <h3 className="text-2xl font-bold mb-3">Understanding refs</h3>
        <button className="button bg-blue-500" onClick={forceRender}>
          Force re-render w/ state change
        </button>
        <button
          className="button bg-violet-500 mt-3"
          onClick={incrementRenderCount}
        >
          Increment Ref Count
        </button>
        <h4 className="text-lg font-semibold mt-3 ">
          Render count: {renderCount.current}
        </h4>
      </div>
      <section className="my-10 flex-center flex-col bg-indigo-500 h-auto py-3 rounded">
        <h2 className="text-2xl font-bold mb-3 text-white">
          React Project Ideas
        </h2>
        <form
          className="flex flex-col border-2 p-3 rounded"
          onSubmit={addProjectIdea}
        >
          <input
            className="mb-3 p-2 rounded border border-gray-400 focus:outline-red-500"
            type="text"
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a project idea"
          />
          <button className="button bg-blue-500 mt-3 text-white font-normal">
            Submit
          </button>
        </form>
        <ol className="list-decimal bg-white/80 h-auto p-3 w-1/2 rounded mt-3 font-semibold text-lg list-inside">
          {list.map((idea, i) => (
            <li key={i}>{idea}</li>
          ))}
        </ol>
      </section>
      <section>
        <div>
          <Decision>
            {(goingOut) => {
              return (
                <h1 className="text-2xl font-bold my-3 ">
                  Am I going out tonight??{" "}
                  <span
                    className={`font-semibold bg-${
                      goingOut ? "blue" : "red"
                    }-500 px-2 py-1 rounded text-white`}
                  >
                    {goingOut ? "Yes!" : "Nope..."}
                  </span>
                </h1>
              );
            }}
          </Decision>
        </div>
      </section>
    </main>
  );
}

export default App;
