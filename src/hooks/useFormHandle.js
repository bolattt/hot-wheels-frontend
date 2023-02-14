import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useFormHandle(url, data, setData, id) {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async (id, url) => {
      const res = await axios.get(url + "/" + id);
      const savedData = await res.data;
      console.log(savedData);
      setData(savedData);
    };
    if (id) {
      getData(id, url);
    }
  }, [id, url]);

  function handleChange(e) {
    console.log(e.target.value);
    const dataCopy = { ...data };
    dataCopy[e.target.id] = e.target.value;
    setData(dataCopy);
  }

  async function handleSubmit(e, method, payload) {
    e.preventDefault();
    console.log(url, data);
    try {
      let res;
      if (method === "post") {
        res = await axios.post(url, payload);
      }
      if (method === "put") {
        res = await axios.put(url, payload);
      }
      const json = await res.data;
      console.log(json);
      setSuccess(true);

      setTimeout(() => {
        navigate("/index");
      }, 1200);
    } catch (error) {
      console.log(url, data);
      console.log(error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  }

  return {
    success,
    error,
    handleChange,
    handleSubmit,
  };
}

export default useFormHandle;
