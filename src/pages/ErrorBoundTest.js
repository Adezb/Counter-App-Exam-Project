const ErrorBoundTest = () => {
  function handleClick() {
    throw new Error("GBOOLA!!!");
  }

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
