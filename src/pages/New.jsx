import { useState } from "react";
import NewCarForm from "../components/NewCarForm";
import NewCollectionForm from "../components/NewCollectionForm";
import FormTab from "../components/FormTab";

function New() {
  const [activeTab, setActiveTab] = useState("car");
  const tab = {
    header1: "New Car",
    header2: "New Collection",
    class1: "car",
    class2: "collection",
  };
  return (
    <section className="mx-auto max-w-lg pt-32 pb-12">
      <FormTab activeTab={activeTab} setActiveTab={setActiveTab} tab={tab} />
      {activeTab === "car" ? <NewCarForm /> : <NewCollectionForm />}
    </section>
  );
}

export default New;
