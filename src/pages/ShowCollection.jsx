import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CollectionDetails from "../components/CollectionDetails";
const API = import.meta.env.VITE_API_URL;

function ShowCollection() {
  const { id } = useParams();
  const URL = `${API}/collections/${id}`;
  const { data: collection } = useFetch(URL);

  return <CollectionDetails collection={collection} />;
}

export default ShowCollection;
