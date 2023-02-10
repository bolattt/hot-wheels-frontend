import { useState } from "react";
import axios from "axios";
import SuccessToast from "./SuccessToast";

const API = import.meta.env.VITE_API_URL;
export default function NewCarForm() {
  const [newCar, setNewCar] = useState({
    name: "",
    quantity: "",
    series: "",
    sku: "",
    image_link: "",
    collection: "",
  });

  function handleChange(e) {
    const newCarCopy = { ...newCar };
    newCarCopy[e.target.id] = e.target.value;
    setNewCar(newCarCopy);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(newCar);
    const res = await axios.post(API + "/cars", newCar);
    const data = await res.data;
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold ">Add A New Car</h2>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Hotwheels Name
        </label>
        <input
          type="name"
          id="name"
          value={newCar.name}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="quantity"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={newCar.quantity}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Quantity"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="series"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Series
        </label>
        <input
          type="text"
          id="series"
          value={newCar.series}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Series eg. Monster Jam"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="sku"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          SKU
        </label>
        <input
          type="text"
          id="sku"
          value={newCar.sku}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="SKU eg.HGP05"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="image_link"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image Link
        </label>
        <input
          type="text"
          id="image_link"
          value={newCar.imageLink}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Image Link"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="collection"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Collection
        </label>
        <input
          type="number"
          id="collection"
          value={newCar.collection}
          onChange={handleChange}
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Collection"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add A New Car
      </button>
    </form>
  );
}
