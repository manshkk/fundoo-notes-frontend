import "./CustomInput.css";

function CustomInput({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
}) {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <input
        id={name}
        className="custom-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default CustomInput;