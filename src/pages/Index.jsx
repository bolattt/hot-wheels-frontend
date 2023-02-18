import Car from "../components/Car";
import Collection from "../components/Collection";
import useFetch from "../hooks/useFetch";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
const API = import.meta.env.VITE_API_URL;

export default function Index() {
  // const { data: cars, error, loading } = useFetch(API + "/cars");
  // const { data: collections } = useFetch(API + "/collections");
  const [firebaseUser] = useAuthState(auth);
  const { data: dbUser } = useFetch(API + "/users/" + firebaseUser.uid);
  console.log(dbUser);
  console.log("firebase uid", firebaseUser.uid);
  // console.log(cars);
  // console.log(collections);
  return (
    <section className="index px-4  pt-36 pb-24 md:px-16">
      <h1 className="mb-16 text-center text-6xl">Collections</h1>
      <div className="grid grid-cols-fluid gap-16 ">
        {dbUser?.collections?.map((collection) => (
          <Collection collection={collection} key={collection.id} />
        ))}
      </div>
      <h1 className="my-16 text-center text-6xl text-slate-200">Cars</h1>
      <div className="grid grid-cols-fluid gap-16 ">
        {dbUser?.cars?.map((car) => (
          <Car car={car} key={car.id} />
        ))}
      </div>
    </section>
  );
}
