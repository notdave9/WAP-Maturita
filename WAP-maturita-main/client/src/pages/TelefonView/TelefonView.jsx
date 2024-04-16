import { Link, useParams, useNavigate } from "react-router-dom";
import { getTelefonById, deleteTelefon } from "../../models/Telefon";
import { useEffect, useState } from "react";
import "./TelefonView.css"

export default function TelefonView() {
  const { id } = useParams();
  const [telefon, setTelefon] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTelefonById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTelefon(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === telefon.znacka) {
      const result = await deleteTelefon(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong telefon znacka");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedtelefon/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Telefon not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading telefon...</p>
      </>
    )
  }

  return (
    <>
      <h1>Telefon view</h1>
      <p className="telefonP">Telefon id: {id}</p>
      <p>Telefon znacka: {telefon.znacka}</p>
      <p>Telefon pamet: {telefon.pamet}</p>
      <p>Telefon kamera: {telefon.kamera}</p>
      <form>
        <p>Napište telefon pro smazání telefonu</p>
        <input type="text" placeholder={telefon.znacka} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete telefon</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatetelefon/${id}`}>
        <p>Update telefon</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
