import { useState } from "react";

const ErrorBoundTest = () => {
  const [bomb, setBomb] = useState("error bomb");

  const handleClick = () => setBomb(bomb);

  return (
    <div>
      <p>Click the button below to test Error Boundary</p> <br />
      <button onClick={handleClick}>Error Boundary Test</button>
    </div>
  );
};

export default ErrorBoundTest;
