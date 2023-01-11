import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import {
  CounterOne,
  ErrorBoundTest,
  ErrorPage,
  UseReducerCounter,
} from "./pages/index";
import MyNavLink from "./customhook/MyNavLink";
import Fallback from "./components/Fallback";

function NavBar() {
  const [navBg, setNavBg] = useState("#0170b1");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/countertwo") {
      setNavBg("#00b4d8");
    } else {
      setNavBg("#0170b1");
    }
  }, [location]);
  return (
    <nav className="nav-bar" style={{ backgroundColor: navBg }}>
      <div className="app__name">
        <Link to="/" className="app__name-link">
          COUNTER 20
        </Link>
      </div>
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
          <Route path="/countertwo" element={<UseReducerCounter />} />
          <Route path="/errorboundtest" element={<ErrorBoundTest />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
