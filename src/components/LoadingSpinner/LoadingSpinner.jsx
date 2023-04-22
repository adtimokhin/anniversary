import { HashLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="grid h-screen place-items-center">
      <HashLoader color="#e5e9e9" size={100} />
    </div>
  );
}

export default LoadingSpinner;
