import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";
const API = import.meta.env.VITE_API_URL;

function NewCollectionForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(API + "/collection", { name });
      const data = await res.data;
      console.log(res);
      console.log(data);
      setSuccess(true);
      setTimeout(() => {
        navigate("/index");
      }, 1500);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold ">Add A New Collection</h2>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Collection Name
          </label>
          <input
            type="text
          "
            id="name"
            value={name}
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
          Add A New Collection
        </button>
      </form>
      {success && <SuccessToast />}
      {error && <ErrorToast />}
    </>
  );
}

export default NewCollectionForm;
