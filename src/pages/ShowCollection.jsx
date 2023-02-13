import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const API = import.meta.env.VITE_API_URL;

function ShowCollection() {
  const { id } = useParams();
  const URL = `${API}/collections/${id}`;
  const { data: collection } = useFetch(URL);

  return <div>ShowCollection</div>;
}

export default ShowCollection;
