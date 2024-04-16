import { Link, useParams, useNavigate } from "react-router-dom";
import { getMonitorById, deleteMonitor } from "../../models/Monitor";
import { useEffect, useState } from "react";
import "./MonitorView.css"

export default function MonitorView() {
  const { id } = useParams();
  const [monitor, setMonitor] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMonitorById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMonitor(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === monitor.znacka) {
      const result = await deleteMonitor(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong monitor znacka");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedmonitor/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Monitor not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading monitor...</p>
      </>
    )
  }

  return (
    <>
      <h1>Monitor view</h1>
      <p className="monitorP">Monitor id: {id}</p>
      <p>Monitor znacka: {monitor.znacka}</p>
      <p>Monitor uhlopricka: {monitor.uhlopricka}</p>
      <p>Monitor hz: {monitor.hz}</p>
      <form>
        <p>Napište jméno Monitora pro smazání Monitora</p>
        <input type="text" placeholder={monitor.znacka} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete monitor</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatemonitor/${id}`}>
        <p>Update monitor</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
