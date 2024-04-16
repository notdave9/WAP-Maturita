import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createMonitor } from "../../models/Monitor";

export default function MonitorCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const monitor = await createMonitor(formData);
    if (monitor.status === 201) {
      redirectToSuccessPage(monitor.payload._id);
    } else {
      setInfo(monitor.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdmonitor/${id}`);
  };

  return (
    <>
      <h1>Monitor create form</h1>

      <form>
        <input
          type="text"
          required
          name="znacka"
          placeholder="Enter znacka"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="uhlopricka"
          placeholder="Enter number of uhlopricka"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="hz"
          placeholder="Enter hz"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create monitor</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
