import "./Loader.css";

function Loader() {
  return (
    <div
      id="loader-container"
      className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full flex items-center justify-center"
    >
      <span className="loading loading-spinner text-info"></span>
    </div>
  );
}

export default Loader;
