import React from "react";

export default function Timer() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2 className="text-2xl font-bold my-1">{seconds} seconds</h2>;
}
