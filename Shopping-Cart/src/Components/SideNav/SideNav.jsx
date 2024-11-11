import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div className="bottom-8 border-black border-b-2">
      <ul className="flex gap-4 font-medium text-xl p-5 ml-10 ">
        <NavLink
          to="/men"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          <li>Men</li>
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          <li>Women</li>
        </NavLink>
        <li>Boy</li>
        <li>Girl</li>
      </ul>
    </div>
  );
}

export default SideNav;
