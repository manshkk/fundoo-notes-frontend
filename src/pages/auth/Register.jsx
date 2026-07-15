import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";

import Logo from "../../components/common/Logo/Logo";
import CustomInput from "../../components/common/CustomInput/CustomInput";
import PasswordInput from "../../components/common/PasswordInput/PasswordInput";
import CustomButton from "../../components/common/CustomButton/CustomButton";

import AuthCard from "../../components/auth/AuthCard/AuthCard";
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout";

import authService from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    // Validate Password
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    const registerData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      password: formData.password,
    };

    try {
      const response = await authService.register(registerData);

      console.log("Registration Success:", response);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          error.response?.data ||
          "Registration Failed"
      );
    }
  };

  return (
    <AuthLayout>
      <AuthCard>
        <div className="auth-header">
          <Logo />

          <h2>Create your account</h2>

          <p>Use Fundoo Notes to organize your work.</p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleRegister}
        >
          <div className="name-row">
            <CustomInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <CustomInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

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

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="register-footer">

            <button
              type="button"
              className="login-link"
              onClick={() => navigate("/login")}
            >
              Already have an account?
            </button>

          </div>

          <CustomButton
            text="Register"
            type="submit"
          />

        </form>
      </AuthCard>
    </AuthLayout>
  );
}

export default Register;