import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()

  // submit the search query
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  }
  useEffect(() => {
    // get url params
    const urlParams = new URLSearchParams(window.location.search)
    const searchTermFromUrl = urlParams.get('searchTerm')
    if(searchTermFromUrl){
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])
  return (
    <header className=" bg-neutral-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className=" font-bold text-sm sm:text-lg flex flex-wrap">
            <span className=" text-sky-500">Demo</span>
            <span className=" text-sky-700">State</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-neutral-100 p-3 rounded-md flex flex-wrap items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-neutral-600" />
          </button>
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
              <img
                src={currentUser.avatar}
                alt="profile-pic"
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
