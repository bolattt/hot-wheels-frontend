import React from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function EditCollection() {
  const { id } = useParams();
  const URL = API + "/cars/" + id;
  console.log(id);
  return <div>EditCollection</div>;
}

export default EditCollection;
