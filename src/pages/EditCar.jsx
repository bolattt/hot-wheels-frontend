import { useParams } from "react-router-dom";
import useCarFormHandle from "../hooks/useCarFormHandle";
import CarForm from "../components/CarForm";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";

export default function EditCar() {
  const { id } = useParams();
  const { car, success, error, handleChange, handleSubmit } =
    useCarFormHandle(id);
  console.log(car);

  return (
    <section className="mx-auto max-w-lg pt-32 pb-12">
      <CarForm
        car={car}
        title="Edit"
        action="Save Edit"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {success && <SuccessToast message="Edited successfully!" />}
      {error && <ErrorToast />}
    </section>
  );
}
