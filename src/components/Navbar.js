import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.carts);
  const NavActive = ({ isActive }) => {
    return {
      color: isActive ? "#f9fafb" : null,
    };
  };

  return (
    <div className="navbar bg-violet-700 text-violet-50 h-20 flex items-center justify-center">
      <nav className="container mx-auto px-10  sm:flex-row flex-col  flex justify-between items-center">
        <div className="nav-left">
          <Link to={"/home"}>
            <h2 className="brand text-2xl text-violet-50 italic font-semibold  ">
              Tech <span className="text-rose-500">Zone</span>
            </h2>
          </Link>
        </div>
        <div className="nav-right">
          <ul className="nav-links flex gap-5 items-center">
            <li>
              <NavLink
                className="text-gray-300 font-normal hover:text-gray-400 duration-300"
                style={NavActive}
                end
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-300 font-normal hover:text-gray-400 duration-300"
                style={NavActive}
                to={"/products"}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="relative group">
                <span>
                  <BsCart3 />
                  <span className=" absolute bottom-2 text-sm left-2 bg-rose-500 h-5 w-5 flex items-center justify-center rounded-full group-hover:bg-sky-500 duration-300">
                    {cartItems.length}
                  </span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
