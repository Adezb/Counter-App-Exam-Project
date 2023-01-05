import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import {
  CounterOne,
  CounterTwo,
  ErrorBoundTest,
  ErrorPage,
} from "./pages/index";
import MyNavLink from "./customhook/MyNavLink";
import Fallback from "./components/Fallback";
import "./counterone.css";
import "./countertwo.css";

function NavBar() {
  const [navBg, setNavBg] = useState("#92b4f3");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/countertwo") {
      setNavBg("#1b7a9f");
    } else {
      setNavBg("#92b4f3");
    }
  }, [location]);
  return (
    <nav className="nav-bar" style={{ backgroundColor: navBg }}>
      <div className="app-name">COUNTER 20</div>
      <MyNavLink to="/" className="nav-link">
        Counter 1
      </MyNavLink>
      <MyNavLink to="/countertwo" className="nav-link">
        Counter 2
      </MyNavLink>
    </nav>
  );
}

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo);
  };

  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <NavBar />
        <Routes>
          <Route path="/" element={<CounterOne />} />
          <Route path="/countertwo" element={<CounterTwo />} />
          <Route path="/errorboundtest" element={<ErrorBoundTest />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
