import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDeleteHandle from "../hooks/useDeleteHandle";
import CarDetails from "../components/CarDetails";
import SuccessToast from "../components/SuccessToast";
import ErrorToast from "../components/ErrorToast";
import ConfirmModal from "../components/ConfirmModal";

const API = import.meta.env.VITE_API_URL;

export default function ShowCar() {
  const { id } = useParams();
  const URL = `${API}/cars/${id}`;
  const { data: car } = useFetch(URL);
  const { deleteSuccess, deleteError, showPopup, setShowPopup, handleDelete } =
    useDeleteHandle();

  return (
    <section className="mt-30 max-w-7xl mx-auto">
      <CarDetails car={car} setShowPopup={setShowPopup} />
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
