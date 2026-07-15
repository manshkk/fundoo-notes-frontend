import "./CustomButton.css";

function CustomButton({
  text,
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className="custom-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default CustomButton;