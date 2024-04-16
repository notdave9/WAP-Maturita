import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateKlavesnice, getKlavesniceById } from "../../models/Klavesnice";

export default function KlavesniceUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [klavesnice, setKlavesnice] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getKlavesniceById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setKlavesnice(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const klavesnice = await updateKlavesnice(id, formData);
    if (klavesnice.status === 200) {
      redirectToSuccessPage(klavesnice.payload._id);
    } else {
      setInfo(klavesnice.msg);
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
    return navigate(`/klavesnice/${id}`);
  };

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
      <h1>Klavesnice update form</h1>

      <form>
        <input
          type="text"
          required
          name="znacka"
          placeholder="Enter znacka"
          defaultValue={klavesnice.znacka}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="mechanika"
          placeholder="Enter zda je tam mechanika"
          defaultValue={klavesnice.mechanika}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="podsviceni"
          placeholder="Enter zda-li tam je podsviceni"
          defaultValue={klavesnice.podsviceni}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update klavesnice</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
