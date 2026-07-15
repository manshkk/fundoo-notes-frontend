import { useState } from "react";
import CustomInput from "../CustomInput/CustomInput";
import "./PasswordInput.css";

function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-input-container">

      <CustomInput
        {...props}
        type={showPassword ? "text" : "password"}
      />

      <button
        className="toggle-password-btn"
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>

    </div>
  );
}

export default PasswordInput;