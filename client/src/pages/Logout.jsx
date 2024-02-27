import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/Auth.context";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const logOut = async () => {
      await logout();
    };
    logOut();
    navigate("/authenticate", { replace: true });
  }, []);

  return <></>;
}
