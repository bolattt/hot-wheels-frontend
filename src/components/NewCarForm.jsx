import { useState } from "react";
import axios from "axios";
import SuccessToast from "./SuccessToast";
import CarForm from "./CarForm";

const API = import.meta.env.VITE_API_URL;

export default function carForm() {
  const [car, setCar] = useState({
    name: "",
    quantity: "",
    series: "",
    sku: "",
    image_link: "",
    collection: "",
  });

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

  return (
    <CarForm
      car={car}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
