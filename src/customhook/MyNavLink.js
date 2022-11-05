import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "none",
    color: "blue",
    backgroundColor: "white",
    transition: "all 2s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none", color: "White" }
      }
      to={to}
      end
      {...props}
    />
  );
};

export default MyNavLink;
