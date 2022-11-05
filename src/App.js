import { Routes, Route } from "react-router-dom";
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
  return (
    <nav className="nav-bar">
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
