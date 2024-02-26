import LandingPage from "~/pages/LandingPage";
import Home from "~/pages/Home";
import { useAuth } from "~/contexts/AuthContext";
import { useEffect } from "react";
function Container() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    console.log("Authentication state changed:", isAuthenticated);
  }, [isAuthenticated]);

  return <div>{isAuthenticated ? <Home /> : <LandingPage />}</div>;
}

export default Container;
