import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import Logo from "../../components/common/Logo/Logo";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import PasswordInput from "../../components/common/PasswordInput/PasswordInput";
import CustomButton from "../../components/common/CustomButton/CustomButton";

import AuthCard from "../../components/auth/AuthCard/AuthCard";
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";

import authService from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
  event.preventDefault();

  try {
    const response = await authService.login(formData);

    console.log("Login Success:", response);

    // Save user information
    localStorage.setItem("token", response.token);
    localStorage.setItem("email", response.email);
    localStorage.setItem("fullName", response.fullName);

    alert("Login Successful");

    navigate("/dashboard");
  } catch (error) {
    console.error(
      "Login Failed:",
      error.response?.data || error.message
    );

    alert("Invalid Email or Password");
  }
};

  return (
    <AuthLayout>
      <AuthCard>

        {/* Header */}

        <div className="auth-header">
          <Logo />

          <h2>Login</h2>

          <p>Continue to Fundoo Notes</p>
        </div>

        {/* Login Form */}

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <CustomInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="forgot-password">
            Forgot Password?
          </div>

          <CustomButton
            text="Login"
            type="submit"
          />

        </form>

      </AuthCard>
    </AuthLayout>
  );
}

export default Login;