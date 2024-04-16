import { Link, useParams, useNavigate } from "react-router-dom";
import { getKlavesniceById, deleteKlavesnice } from "../../models/Klavesnice";
import { useEffect, useState } from "react";
import "./KlavesniceView.css"

export default function KlavesniceView() {
  const { id } = useParams();
  const [klavesnice, setKlavesnice] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getKlavesniceById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setKlavesnice(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === klavesnice.znacka) {
      const result = await deleteKlavesnice(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong klavesnice znacka");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedklavesnice/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Klavesnice not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading klavesnice...</p>
      </>
    )
  }

  return (
    <>
      <h1>Klavesnice view</h1>
      <p className="klavesniceP">Klavesnice id: {id}</p>
      <p>Klavesnice znacka: {klavesnice.znacka}</p>
      <p>Klavesnice mechanika: {klavesnice.mechanika}</p>
      <p>Klavesnice podsviceni: {klavesnice.podsviceni}</p>
      <form>
        <p>Napište jméno Klavesnicea pro smazání Klavesnicea</p>
        <input type="text" placeholder={klavesnice.znacka} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete klavesnice</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateklavesnice/${id}`}>
        <p>Update klavesnice</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
