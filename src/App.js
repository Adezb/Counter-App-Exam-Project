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
      <div className="app-name"> COUNTER 20</div>
      <p className="app-description">
        Counter 20 App counts in Positive + or Negative - ranging from 0 to 20.
      </p>
      <MyNavLink to="/" className="nav-link">
        Counter 1
      </MyNavLink>
      <MyNavLink to="/countertwo" className="nav-link">
        Counter 2
      </MyNavLink>
      {/* <MyNavLink to="/errorboundtest" className="nav-link">
        ErrorTest
      </MyNavLink> */}
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
