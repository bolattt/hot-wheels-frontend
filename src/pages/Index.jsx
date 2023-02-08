import Car from "../components/Car";
import useFetch from "../hooks/useFetch";
const URL = import.meta.env.VITE_API_URL;

export default function Index() {
  const { data: cars, error, loading } = useFetch(URL + "/cars");
  console.log(cars);
  return (
    <div className="index grid gap-16 grid-cols-fluid  px-16 pt-36 pb-24">
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </div>
  );
}
