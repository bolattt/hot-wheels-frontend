import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useDeleteHandle() {
  const navigate = useNavigate();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  async function handleDelete(URL) {
    console.log(URL);
    try {
      const res = await axios.delete(URL);
      const deletedItem = await res.data;
      console.log(deletedItem);
      setDeleteSuccess(true);
      setShowPopup(false);
      setTimeout(() => {
        navigate("/index");
      }, 1500);
    } catch (deleteError) {
      setDeleteError(true);
      console.log(deleteError);
      setTimeout(() => {
        setDeleteError(false);
      }, 1500);
    }
  }

  return {
    deleteSuccess,
    deleteError,
    showPopup,
    handleDelete,
    setShowPopup,
  };
}

export default useDeleteHandle;
