import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDeleteHandle from "../hooks/useDeleteHandle";
import CollectionDetails from "../components/CollectionDetails";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";
import ConfirmModal from "../components/ConfirmModal";
import Car from "../components/Car";
const API = import.meta.env.VITE_API_URL;

function ShowCollection() {
  const { id } = useParams();
  const URL = `${API}/collections/${id}`;
  const { data: collection } = useFetch(URL);
  const { deleteSuccess, deleteError, showPopup, setShowPopup, handleDelete } =
    useDeleteHandle();

  console.log("collection", collection);

  return (
    <section className="mt-30 mx-auto max-w-7xl pb-12">
      <CollectionDetails collection={collection} setShowPopup={setShowPopup} />
      <hr />
      <h2 className="my-6 text-4xl">
        Cars in this collection :{" "}
        <span className="">{collection.cars?.length}</span>
      </h2>

      <div className=" grid grid-cols-fluid gap-16 ">
        {collection.cars?.map((car) => (
          <Car car={car} key={car.id} />
        ))}
      </div>
      {deleteSuccess && <SuccessToast message="Deleted Successfully!" />}
      {deleteError && <ErrorToast />}
      {showPopup && (
        <ConfirmModal
          handleDelete={handleDelete}
          setShowPopup={setShowPopup}
          URL={URL}
        />
      )}
    </section>
  );
}

export default ShowCollection;
