import React from "react";
import { useParams } from "react-router-dom";

function EditCollection() {
  const { id } = useParams();
  console.log(id);
  return <div>EditCollection</div>;
}

export default EditCollection;
