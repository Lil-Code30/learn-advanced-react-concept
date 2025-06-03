export default function Button(props) {
  return (
    <button className="bg-blue-500 border-2 border-black px-4 py-2 rounded flex items-center gap-2 font-bold text-white text-lg">
      {props.children}
    </button>
  );
}
