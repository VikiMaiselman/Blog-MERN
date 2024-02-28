import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { url, headers } from "../service/config";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = React.useState();

  React.useEffect(() => {
    const getAuthStatus = async () => {
      try {
        const response = await axios.get(
          `${url}/authstatus`,
          { withCredentials: true },
          headers
        );
        setIsAuthenticated(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAuthStatus();
  }, [isAuthenticated]);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${url}/get-user`,
        { withCredentials: true },
        headers
      );
      return response.data;
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Ooops!",
        text: err.response.data.message,
        icon: "error",
      });
      return null;
    }
  };

  const login = async (user) => {
    try {
      const response = await axios.post(
        `${url}/login`,
        user,
        { withCredentials: true },
        headers
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Ooops!",
        text: "This user does not exist. Are you sure you don't need to sign up?",
        icon: "error",
      });
    }
  };

  const register = async (user) => {
    let response;
    try {
      response = await axios.post(
        `${url}/register`,
        user,
        { withCredentials: true },
        headers
      );

      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Ooops!",
        text: error.response.data.message,
        icon: "error",
      });
    }
  };

  const logout = async () => {
    await axios.get(`${url}/logout`, { withCredentials: true }, headers);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getUser, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
