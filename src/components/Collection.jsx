import { Link } from "react-router-dom";
import wheel from "../assets/profile2.png";

function Collection({ collection }) {
  return (
    // <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <div className="mx-auto w-full max-w-sm   rounded border-2 border-l-orange-500 border-r-purple-500 border-t-red-500 border-b-purple-800 p-0.5 shadow-xl transition hover:-translate-y-1 ">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={wheel}
          alt="wheel"
        />
        <h3 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
          {collection.name}
        </h3>
        {/* <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span> */}
        <div className="mt-4 flex space-x-3 md:mt-6">
          <Link
            to={`/collections/${collection.id}`}
            className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Collection;
