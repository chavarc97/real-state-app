import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className=" bg-neutral-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className=" font-bold text-sm sm:text-lg flex flex-wrap">
            <span className=" text-sky-500">Demo</span>
            <span className=" text-sky-700">State</span>
          </h1>
        </Link>
        <form className="bg-neutral-100 p-3 rounded-md flex flex-wrap items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-neutral-700" />
        </form>
        <ul className="flex gap-4 ">
          <Link to={"/"}>
            <li className=" hidden sm:inline text-neutral-900 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className=" hidden sm:inline text-neutral-900 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img src={currentUser.avatar} alt="profile-pic" 
              className="rounded-full h-7 w-7 object-cover "
              />
            ) : (
              <li className=" hidden sm:inline text-neutral-900 hover:underline">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
