import React from "react";

function CollectionForm({ handleSubmit, method, collection }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, method, collection)}>
      <h2 className="text-xl font-bold ">Add A New Collection</h2>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Collection Name
        </label>
        <input
          type="text"
          id="name"
          value={collection.name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="image_link"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Collection Album Image
        </label>
        <input
          type="text"
          id="image_link"
          value={collection.image_link}
          onChange={(e) => setName(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Name"
          required
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>
    </form>
  );
}

export default CollectionForm;
