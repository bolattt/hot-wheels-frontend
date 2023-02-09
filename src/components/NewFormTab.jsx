function NewFormTab({ setAddNew, addNew }) {
  const normalClass =
    "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group";
  const activeClass =
    "inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500 group active ";

  return (
    <div className="new-form-tab mb-5">
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white mt-3 rounded-lg">
        <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-5">
            <button
              onClick={() => setAddNew("car")}
              className={addNew === "car" ? activeClass : normalClass}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              New Car
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => setAddNew("collection")}
              className={addNew === "car" ? normalClass : activeClass}
              aria-current="page"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              New Collection
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NewFormTab;
