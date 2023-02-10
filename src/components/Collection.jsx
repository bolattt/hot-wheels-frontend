import { Link } from "react-router-dom";

function Collection({ collection }) {
  return (
    // <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="w-full max-w-sm   rounded p-0.5 shadow-xl transition hover:-translate-y-1 border-2 border-l-orange-500 border-r-purple-500 border-t-red-500 border-b-purple-800 transition">
      <div class="flex justify-end px-4 pt-4"></div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://cdn.shopify.com/s/files/1/0447/0957/6866/products/30004325-7.jpg?v=1652236642"
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {collection.name}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <Link
            to={`/collections/${collection.id}`}
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Collection;
