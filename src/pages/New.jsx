import React from "react";
import NewCarForm from "../components/NewCarForm";
import NewCollectionForm from "../components/NewCollectionForm";

function New() {
  return (
    <div className="max-w-lg mx-auto pt-32 pb-12">
      <NewCarForm />
      <NewCollectionForm />
    </div>
  );
}

export default New;
