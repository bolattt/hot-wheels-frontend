import CarForm from "./CarForm";
import { useNavigate } from "react-router-dom";
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
        action="Create"
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {success && <SuccessToast />}
      {error && <ErrorToast />}
    </>
  );
}
