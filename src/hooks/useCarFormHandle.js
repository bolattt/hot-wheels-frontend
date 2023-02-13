import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

function useCarFormHandle(id) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [car, setCar] = useState({
    name: "",
    quantity: "",
    series: "",
    sku: "",
    image_link: "",
    collection_id: "",
  });

  useEffect(() => {
    const fetchCar = async (id) => {
      const res = await axios.get(API + "/cars/" + id);
      const savedCar = await res.data;
      console.log(savedCar);
      setCar(savedCar);
    };
    if (id) {
      fetchCar(id);
    }
  }, [id]);

  function handleChange(e) {
    const carCopy = { ...car };
    carCopy[e.target.id] = e.target.value;
    setCar(carCopy);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(API + "/cars", car);
      const data = await res.data;
      console.log(data);
      setSuccess(true);

      setTimeout(() => {
        navigate("/index");
      }, 1200);
    } catch (error) {
      console.log(error.message);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  }

  return {
    car,
    success,
    error,
    setCar,
    handleChange,
    handleSubmit,
  };
}

export default useCarFormHandle;
