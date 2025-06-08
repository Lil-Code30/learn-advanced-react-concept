import React from "react";
import ReactDOM from "react-dom/client";
import { Link, useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const swCharacters = [
    { name: "Luke Skywalker", type: "Jedi" },
    { name: "Darth Vader", type: "Sith" },
    { name: "Emperor Palpatine", type: "Sith" },
    { name: "Yoda", type: "Jedi" },
  ];

  const typeFilter = searchParams.get("type");

  const displayedCharacters = typeFilter
    ? swCharacters.filter((char) => char.type.toLowerCase() === typeFilter)
    : swCharacters;

  const charEls = displayedCharacters.map((char) => (
    <div key={char.name} className="my-3 border rounded">
      <h3
        className="text-xl pl-2 font-bold pt-2"
        style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
      >
        Name: {char.name}
      </h3>
      <p className="pl-2 font-medium pb-1.5">Type: {char.type}</p>
      <hr />
    </div>
  ));

  return (
    <main className="p-5">
      <h2 className="text-3xl font-black my-5">Home</h2>
      <div className="flex gap-3 text-lg font-semibold mb-2">
        <p className="text-gray-500 ">Filter by type:</p>
        <button
          className="text-white bg-gray-500 px-2 rounded hover:bg-gray-600"
          onClick={() => setSearchParams({})}
        >
          All
        </button>
        <button
          className="text-white bg-blue-500 px-2 rounded hover:bg-blue-600 hover:cursor-pointer"
          onClick={() => setSearchParams({ type: "jedi" })}
        >
          Jedi
        </button>
        <button
          className="text-white bg-red-500 px-2 rounded hover:bg-red-600"
          onClick={() => setSearchParams({ type: "sith" })}
        >
          Sith
        </button>
      </div>
      {charEls}
    </main>
  );
}

/*
using Link to apply the filter
<Link
          className="text-white bg-gray-500 px-2 rounded hover:bg-gray-600"
          to="."
        >
          All
        </Link>
        <Link
          className="text-white bg-blue-500 px-2 rounded hover:bg-blue-600 hover:cursor-pointer"
          to="?type=jedi"
        >
          Jedi
        </Link>
        <Link
          className="text-white bg-red-500 px-2 rounded hover:bg-red-600"
          to="?type=sith"
        >
          Sith
        </Link>

*/
