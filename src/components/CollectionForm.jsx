import React from "react";

function CollectionForm({ handleSubmit, method, collection }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, method, collection)}>
      <h2 className="text-xl font-bold ">Add A New Collection</h2>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Collection Name
        </label>
        <input
          type="text"
          id="name"
          value={collection.name}
          onChange={(e) => setName(e.target.value)}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="image_link"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Collection Album Image
        </label>
        <input
          type="text"
          id="image_link"
          value={collection.image_link}
          onChange={(e) => setName(e.target.value)}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Name"
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>
    </form>
  );
}

export default CollectionForm;