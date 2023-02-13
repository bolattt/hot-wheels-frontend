import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CarDetails from "../components/CarDetails";
import axios from "axios";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";
import ConfirmModal from "../components/ConfirmModal";
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
    <section className="mt-30 max-w-7xl mx-auto">
      <CarDetails car={car} setShowPopup={setShowPopup} />
      {success && <SuccessToast message="Deleted Successfully!" />}
      {error && <ErrorToast />}
      {showPopup && (
        <ConfirmModal handleDelete={handleDelete} setShowPopup={setShowPopup} />
      )}
    </section>
  );
}
