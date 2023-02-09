import { useState } from "react";
import NewCarForm from "../components/NewCarForm";
import NewCollectionForm from "../components/NewCollectionForm";
import NewFormTab from "../components/NewFormTab";

function New() {
  const [addNew, setAddNew] = useState("car");
  return (
    <div className="max-w-lg mx-auto pt-32 pb-12">
      <NewFormTab setAddNew={setAddNew} addNew={addNew} />
      {addNew === "car" ? <NewCarForm /> : <NewCollectionForm />}
    </div>
  );
}

export default New;
