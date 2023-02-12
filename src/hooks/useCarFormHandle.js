import { useState, useEffect } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

function useCarFormHandle(id) {
  //   const [car, setCar] = useState({
  //     name: "",
  //     quantity: "",
  //     series: "",
  //     sku: "",
  //     image_link: "",
  //     collection: "",
  //   });
  const [car, setCar] = useState([]);

  useEffect(() => {
    const fetchCar = async (id) => {
      const res = await axios.get(API + "/cars/" + id);
      const savedCar = await res.data;
      console.log(savedCar);
      if (savedCar) {
        setCar(savedCar);
      }
    };
    fetchCar(id);
  }, [id]);

  console.log("car is ", car);

  function handleChange(e) {
    const carCopy = { ...car };
    carCopy[e.target.id] = e.target.value;
    setCar(carCopy);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(car);
    const res = await axios.post(API + "/cars", car);
    const data = await res.data;
    console.log(data);
  }

  return {
    car,
    setCar,
    handleChange,
    handleSubmit,
  };
}

export default useCarFormHandle;
