import { ClipLoader } from "react-spinners";

const Spinner = ({ loading, size = 50, color = "#3498db" }) => {
  return (
    <div className="spinner-container">
      <ClipLoader size={size} color={color} loading={loading} />
    </div>
  );
};

export default Spinner;
