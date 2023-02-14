import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDeleteHandle from "../hooks/useDeleteHandle";
import CollectionDetails from "../components/CollectionDetails";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";
import ConfirmModal from "../components/ConfirmModal";
const API = import.meta.env.VITE_API_URL;

function ShowCollection() {
  const { id } = useParams();
  const URL = `${API}/collections/${id}`;
  const { data: collection } = useFetch(URL);
  const { deleteSuccess, deleteError, showPopup, setShowPopup, handleDelete } =
    useDeleteHandle();

  return (
    <section className="mt-30 max-w-7xl mx-auto">
      <CollectionDetails collection={collection} setShowPopup={setShowPopup} />
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
