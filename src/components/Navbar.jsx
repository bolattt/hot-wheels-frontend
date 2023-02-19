import { Link } from "react-router-dom";
import wheel from "../assets/wheel-100.png";
import profile from "../assets/profile.png";
import { auth } from "../firebase/firebase";
import { logout } from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";

function Navbar() {
  const [displayName, setDisplayName] = useState("");
  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log("use effect was called");
    console.log("user in useeffect", user);
    setTimeout(() => {
      if (user) {
        setDisplayName(user.displayName);
      }
    }, 1000);
  }, [user]);
  // console.log("navbar user", user);
  // console.log("navbar displayname", user?.displayName);
  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white px-2 py-2 dark:border-gray-600 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/index" className="flex items-center">
          <img src={wheel} className="mr-3 h-8 sm:h-10" alt="hotwheels Logo" />

          <span className="font-face-black-script self-center whitespace-nowrap text-5xl font-semibold dark:text-white">
            Hot Wheels
          </span>
        </Link>
        <div className="flex md:order-2">
          {!user && (
            <Link to="/auth">
              <button
                type="button"
                className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
              >
                Login
              </button>
            </Link>
          )}

          {user && (
            <>
              {user?.photoURL ? (
                <img
                  className="mr-3 block h-8 w-8 self-center rounded-full"
                  src={user?.photoURL}
                  alt="user photo"
                />
              ) : (
                <span className="align-center mr-3 flex  items-center rounded-full bg-slate-400 p-2">
                  {displayName}
                </span>
              )}
              <button
                onClick={logout}
                type="button"
                className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
              >
                Logout
              </button>
            </>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <Link
                to="/index"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="/collections"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                to="/new"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Add New
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
