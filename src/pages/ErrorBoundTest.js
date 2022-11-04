import MyCounter from "../customhook/MyCounter";

const ErrorBoundTest = () => {
  const { count, increment } = MyCounter();
  if (count >= 2) {
    throw new Error();
  } else {
    return (
      <div className="boundary-test">
        <p>Click the button twice to test Error Boundary</p> <br />
        <div>{count}</div>
        <button className="boundary-test-btn" onClick={increment}>
          Error Boundary Test
        </button>
      </div>
    );
  }
};

export default ErrorBoundTest;
