import { useState } from "react";

const ErrorBoundTest = () => {
  const [bomb, setBomb] = useState("error bomb");

  const handleClick = () => setBomb(bomb);

  return (
    <div className="boundary-test">
      <p>Click the button below to test Error Boundary</p> <br />
      <button className="boundary-test-btn" onClick={handleClick}>
        Error Boundary Test
      </button>
    </div>
  );
};

export default ErrorBoundTest;
