import Car from "../components/Car";
import Collection from "../components/Collection";
import useFetch from "../hooks/useFetch";
const URL = import.meta.env.VITE_API_URL;

export default function Index() {
  const { data: cars, error, loading } = useFetch(URL + "/cars");
  const { data: collections } = useFetch(URL + "/collections");
  console.log(cars);
  console.log(collections);
  return (
    <div className="index  px-16 pt-36 pb-24">
      <h1 className="text-6xl">Collections</h1>
      <div className="grid gap-16 grid-cols-fluid ">
        {collections.map((collection) => (
          <Collection collection={collection} />
        ))}
      </div>
      <h1 className="text-6xl text-slate-200">Cars</h1>
      <div className="grid gap-16 grid-cols-fluid ">
        {cars.map((car) => (
          <Car car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
}
