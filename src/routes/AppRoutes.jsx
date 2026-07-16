import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import Archive from "../pages/archive/Archive";
import Trash from "../pages/trash/Trash";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
        }
      />
      <Route
            path="/archive"
            element={
                <ProtectedRoute>
                    <Archive />
                </ProtectedRoute>
            }
        />
          <Route
              path="/trash"
              element={
                  <ProtectedRoute>
                      <Trash />
                  </ProtectedRoute>
              }
          />
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>

  );

}

export default AppRoutes;