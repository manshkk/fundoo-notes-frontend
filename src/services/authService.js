import api from "./api";

const register = async (userData) => {
  const response = await api.post("/Users/register", userData);
  return response.data;
};

const login = async (loginData) => {
  const response = await api.post("/Users/login", loginData);
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;