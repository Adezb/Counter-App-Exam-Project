import { Link } from "react-router-dom";
const Fallback = () => {
  return (
    <div>
      <div className="error-bound">
        <h2>Something went wrong here. </h2>
        <p>
          Click on <Link to="/">Counter One</Link> and reload page.
        </p>
      </div>
    </div>
  );
};

export default Fallback;
