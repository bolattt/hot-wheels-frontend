import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useDeleteHandle() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  async function handleDelete(URL) {
    console.log(URL);
    try {
      const res = await axios.delete(URL);
      const deletedItem = await res.data;
      console.log(deletedItem);
      setSuccess(true);
      setShowPopup(false);
      setTimeout(() => {
        navigate("/index");
      }, 1500);
    } catch (error) {
      setError(true);
      console.log(error);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  }

  return {
    success,
    error,
    showPopup,
    handleDelete,
    setShowPopup,
  };
}

export default useDeleteHandle;
