import { NavLink } from "react-router-dom";

export default function Header() {
  const active = `bg-blue-600 text-white`;
  const inactive = `inline-block py-2 px-4 rounded-t border-b-2 border-transparent cursor-pointer hover:border-blue-600`;

  return (
    <div className="font-bold text-l text-center text-blue-600 border-b border-blue-600 ">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <NavLink
            to="pagination"
            className={(navData) =>
              navData.isActive ? `${active} ${inactive}` : `${inactive}`
            }
          >
            Pagination
          </NavLink>
        </li>
        <li className="mr-2">
          <NavLink
            to="infinite-scroll"
            className={(navData) =>
              navData.isActive ? `${active} ${inactive}` : `${inactive}`
            }
          >
            Infinite Scroll
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
