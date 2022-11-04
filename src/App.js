import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import CounterOne from "./pages/CounterOne";
import CounterTwo from "./pages/CounterTwo";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundTest from "./pages/ErrorBoundTest";
import MyNavLink from "./customhook/MyNavLink";
import Fallback from "./components/Fallback";
import "./counterone.css";
import "./countertwo.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <MyNavLink to="/" className="nav-link">
        Counter One
      </MyNavLink>
      <MyNavLink to="/countertwo" className="nav-link">
        Counter Two
      </MyNavLink>
      <MyNavLink to="/errorboundtest" className="nav-link">
        ErrorBound
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
