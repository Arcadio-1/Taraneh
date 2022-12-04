import ErrorIcon from "../Icons/notificationsIcons/ErrorIcon";

const LoadingSpinner = ({ text, type }) => {
  return (
    <div className="loadingSpiner">
      {type !== "warning" && <div className="loadingSpiner-spiner"></div>}
      {type === "warning" && <ErrorIcon />}

      <h2
        className={`loadingSpiner-text ${
          type === "warning" && "loadingSpiner-text-warning"
        }`}
      >
        {text}
      </h2>
    </div>
  );
};
export default LoadingSpinner;
