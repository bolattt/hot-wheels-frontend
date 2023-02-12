import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NewCarForm from "../components/NewCarForm";
import useCarFormHandle from "../hooks/useCarFormHandle";
import CarForm from "../components/CarForm";

export default function EditCar() {
  const { id } = useParams();
  console.log(id);
  //   const API = import.meta.env.VITE_API_URL + "/cars/" + id;
  const { car, handleChange, handleSubmit } = useCarFormHandle(id);
  console.log(car);
  return (
    <div className="max-w-lg mx-auto pt-32 pb-12">
      <CarForm
        car={car}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
