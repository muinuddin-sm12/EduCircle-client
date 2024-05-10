import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DropDownProfile from "./DropDownProfile";
import ThemeControlerBtn from "./ThemeControlerBtn";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  // console.log(user);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar sticky top-0 bg-base-100 max-w-[1536px] mx-auto px-4 md:px-10 py-5 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"}
              />
            </svg>
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm space-y-2 dropdown-content mt-3 z-[100] p-4 shadow bg-base-100 rounded-box w-48 "
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/assignments"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                    : ""
                }
              >
                Assignments
              </NavLink>
              {user && (
                <>
                  <NavLink
                    to="/create-assignments"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                        : ""
                    }
                  >
                    Create Assignments
                  </NavLink>
                </>
              )}
              {user && (
                <>
                  <NavLink
                    to="/pending-assignments"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#36a3f7] border border-[#36a3f7] rounded-md px-2 py-1"
                        : ""
                    }
                  >
                    Pending Assignments
                  </NavLink>
                </>
              )}
            </ul>
          )}
        </div>
        <Link to="/" className="text-2xl  hover:text-[#FCB138] font-bold flex items-center">
          <img className="h-10" src={logo} alt="" />
          <span className="text-[#36a3f7]">Edu</span>Circle
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal   px-1 text-base flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#36a3f7] px-2 py-1" : "" 
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/assignments"
            className={({ isActive }) =>
              isActive ? "text-[#08D5FF] px-2 py-1" : ""
            }
          >
            Assignments
          </NavLink>
          {user && (
            <NavLink
              to="/create-assignments"
              className={({ isActive }) =>
                isActive ? "text-[#08D5FF] px-2 py-1" : ""
              }
            >
              Create Assignments
            </NavLink>
          )}
          {user && (
            <NavLink
              to="/pending-assignments"
              className={({ isActive }) =>
                isActive ? "text-[#08D5FF] px-2 py-1" : ""
              }
            >
              Pending Assignments
            </NavLink>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4 mt-2 hidden md:block">
          <div onClick={() => setIsDarkMode(!isDarkMode)}>
            {/* Theme controler button */}
            <ThemeControlerBtn/>
          </div>
        </div>
        {user ? (
          <div className="flex items-center gap-2">
            <div
              onClick={() => setOpenProfile(!openProfile)}
              className="w-12 h-12 cursor-pointer rounded-full flex justify-center items-center border-[#36a3f7] border-[3px]"
            >
              <img
                className="rounded-full h-full w-full object-cover"
                src={user?.photoURL || "https://i.ibb.co/BwsjNp3/1057231.png"}
              />
            </div>
          </div>
        ) : (
          <div className="flex dark:bg-[#1979C1] px-6 py-2 rounded-full items-center gap-3">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <div className="text-white">{"|"}</div>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        )}
      </div>
      {openProfile && (
        <div onMouseLeave={() => setOpenProfile(false)}>
          <DropDownProfile />
        </div>
      )}
    </div>
  );
};

export default Navbar;
