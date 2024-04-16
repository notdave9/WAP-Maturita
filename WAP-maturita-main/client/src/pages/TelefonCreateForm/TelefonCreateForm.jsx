import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTelefon } from "../../models/Telefon";

export default function TelefonCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const telefon = await createTelefon(formData);
    if (telefon.status === 201) {
      redirectToSuccessPage(telefon.payload._id);
    } else {
      setInfo(telefon.msg);
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
    return navigate(`/createdtelefon/${id}`);
  };

  return (
    <>
      <h1>Telefon create form</h1>

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
          name="pamet"
          placeholder="Enter number of pamet"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="kamera"
          placeholder="Enter if there is a kamera"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create telefon</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
