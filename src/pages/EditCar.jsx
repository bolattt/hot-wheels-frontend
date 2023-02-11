import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import NewCarForm from "../components/NewCarForm";

export default function EditCar() {
  const { id } = useParams();
  const API = import.meta.env.VITE_API_URL + "/cars/" + id;
  const { data: car } = useFetch(API);
  console.log(car);
  return (
    <div className="max-w-lg mx-auto pt-32 pb-12">
      <NewCarForm />
    </div>
  );
}
