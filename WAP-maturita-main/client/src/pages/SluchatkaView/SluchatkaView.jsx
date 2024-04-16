import { Link, useParams, useNavigate } from "react-router-dom";
import { getSluchatkaById, deleteSluchatka } from "../../models/Sluchatka";
import { useEffect, useState } from "react";
import "./SluchatkaView.css"

export default function SluchatkaView() {
  const { id } = useParams();
  const [sluchatka, setSluchatka] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSluchatkaById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSluchatka(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === sluchatka.znacka) {
      const result = await deleteSluchatka(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong sluchatka znacka");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedsluchatka/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Sluchatka not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading sluchatka...</p>
      </>
    )
  }

  return (
    <>
      <h1>Sluchatka view</h1>
      <p className="sluchatkaP">Sluchatka id: {id}</p>
      <p>Sluchatka znacka: {sluchatka.znacka}</p>
      <p>Sluchatka hlasitost: {sluchatka.hlasitost}</p>
      <form>
        <p>Napište jméno sluchátek pro smazání sluchátek</p>
        <input type="text" placeholder={sluchatka.znacka} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete sluchatka</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatesluchatka/${id}`}>
        <p>Update sluchatka</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
