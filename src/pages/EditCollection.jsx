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
  return (
    <section className="max-w-lg mx-auto pt-32 pb-12">
      <form onSubmit={(e) => handleSubmit(e, "put", collection)}>
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
            value={collection.name || ""}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
