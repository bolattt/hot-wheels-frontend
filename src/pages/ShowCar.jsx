import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Car from "../components/Car";
import useFetch from "../hooks/useFetch";
import CarDetails from "../components/CarDetails";
import axios from "axios";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";
import ConfirmModal from "../components/ConfirmModal";
import { useEffect } from "react";
const API = import.meta.env.VITE_API_URL;

export default function ShowCar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = `${API}/cars/${id}`;
  const { data: car } = useFetch(URL);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(URL);
      const deletedCar = await res.data;
      console.log(deletedCar);
      setSuccess(true);
      setTimeout(() => {
        navigate("/index");
      }, 1500);
    } catch (error) {
      setError(true);
      console.log(error);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  };
  console.log(car);

  return (
    <div className="mt-30 max-w-7xl mx-auto">
      <section className="pt-20 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={car.image_link}
              alt="car"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {car.name}
            </h1>
            <p className="mt-6 mb-2 text-2xl sm:mb-12">
              Quantity: {car.quantity}
            </p>
            <p className=" mb-8 text-2xl sm:mb-12">Series: {car.series} </p>
            <p className=" mb-8 text-2xl sm:mb-12">SKU: {car.sku} </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 border border-rounded hover:-translate-y-1 transition">
                Edit
              </button>
              <button
                onClick={() => setShowPopup(true)}
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:-translate-y-1 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
      {success && <SuccessToast />}
      {error && <ErrorToast />}
      {showPopup && (
        <ConfirmModal handleDelete={handleDelete} setShowPopup={setShowPopup} />
      )}
    </div>
  );
}
