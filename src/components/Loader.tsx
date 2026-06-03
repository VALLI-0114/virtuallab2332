import "./loader.css";

export function Loader() {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center">
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
}
