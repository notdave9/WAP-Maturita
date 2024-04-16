import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateMonitor, getMonitorById } from "../../models/Monitor";

export default function MonitorUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [monitor, setMonitor] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMonitorById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMonitor(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const monitor = await updateMonitor(id, formData);
    if (monitor.status === 200) {
      redirectToSuccessPage(monitor.payload._id);
    } else {
      setInfo(monitor.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.znacka]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/monitor/${id}`);
  };

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
      <h1>Monitor update form</h1>

      <form>
        <input
          type="text"
          required
          name="znacka"
          placeholder="Enter znacka"
          defaultValue={monitor.znacka}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="uhlopricka"
          placeholder="Enter number of uhlopricka"
          defaultValue={monitor.uhlopricka}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="hz"
          placeholder="Enter hz"
          defaultValue={monitor.hz}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update monitor</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
