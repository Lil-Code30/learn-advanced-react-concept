import React from "react";

export default function Decision({ children }) {
  const [goingOut, setGoingOut] = React.useState(false);

  function toggleGoingOut() {
    setGoingOut((prev) => !prev);
  }

  return (
    <div>
      <button
        className="button mr-2 text-white bg-violet-600"
        onClick={toggleGoingOut}
      >
        Change mind
      </button>
      {children(goingOut)}
    </div>
  );
}
