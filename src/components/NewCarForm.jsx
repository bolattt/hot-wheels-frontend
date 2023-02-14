import CarForm from "./CarForm";
import useCarFormHandle from "../hooks/useCarFormHandle";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";

export default function carForm() {
  const { car, success, error, handleChange, handleSubmit } =
    useCarFormHandle();

  return (
    <>
      <CarForm
        car={car}
        title="Add a New Car"
        action="Add"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {success && <SuccessToast message="Created a new car!" />}
      {error && <ErrorToast />}
    </>
  );
}
