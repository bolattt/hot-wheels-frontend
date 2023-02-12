import CarForm from "./CarForm";
import useCarFormHandle from "../hooks/useCarFormHandle";

export default function carForm() {
  const { car, handleChange, handleSubmit } = useCarFormHandle();

  return (
    <CarForm
      car={car}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
