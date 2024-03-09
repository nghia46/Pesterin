import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./contexts/AuthContext";
import { PackageProvider } from "./contexts/PackageContext";
import { publicRoutes } from "~/routes";

import Explore from "./pages/Explore";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthProvider>
      <PackageProvider>
        <Router>
          <div className="App">
            <ToastContainer />
            <Routes>
              {publicRoutes.map((route, index) => {
                let Page = route.component;

                if (route.path === "/") {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        isLoggedIn ? (
                          <Home onLogout={handleLogout} />
                        ) : (
                          <LandingPage onLogin={handleLogin} />
                        )
                      }
                    />
                  );
                } else if (route.path === "/ideas") {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        isLoggedIn ? (
                          <Home onLogout={handleLogout} />
                        ) : (
                          <Explore onLogin={handleLogin} />
                        )
                      }
                    />
                  );
                }

                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      isLoggedIn ? (
                        <Page onLogout={handleLogout} />
                      ) : (
                        <Navigate to="/" />
                      )
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </PackageProvider>
    </AuthProvider>
  );
}

export default App;
