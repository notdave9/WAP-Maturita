import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTelefon, getTelefonById } from "../../models/Telefon";

export default function TelefonUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [telefon, setTelefon] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTelefonById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTelefon(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const telefon = await updateTelefon(id, formData);
    if (telefon.status === 200) {
      redirectToSuccessPage(telefon.payload._id);
    } else {
      setInfo(telefon.msg);
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
    return navigate(`/telefon/${id}`);
  };

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
      <h1>Telefon update form</h1>

      <form>
        <input
          type="text"
          required
          name="znacka"
          placeholder="Enter znacka"
          defaultValue={telefon.znacka}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="pamet"
          placeholder="Enter number of pamet"
          defaultValue={telefon.pamet}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="kamera"
          placeholder="Enter if kamera"
          defaultValue={telefon.kamera}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update telefon</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
