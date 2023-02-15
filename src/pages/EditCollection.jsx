import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useFormHandle from "../hooks/useFormHandle";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";

const API = import.meta.env.VITE_API_URL;

function EditCollection() {
  const { id } = useParams();
  const URL = API + "/collections/" + id;
  const { data: collection, setData: setCollection } = useFetch(URL);
  const { success, error, handleSubmit, handleChange } = useFormHandle(
    URL,
    collection,
    setCollection
  );
  console.log(collection);
  return (
    <section className="mx-auto max-w-lg pt-32 pb-12">
      <form onSubmit={(e) => handleSubmit(e, "put", collection)}>
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
            value={collection.name || ""}
            onChange={handleChange}
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
            Collection Name
          </label>
          <input
            type="text"
            id="image_link"
            value={collection.image_link || ""}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Name"
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
      {success && <SuccessToast message="Edited successfully!" />}
      {error && <ErrorToast />}
    </section>
  );
}

export default EditCollection;
