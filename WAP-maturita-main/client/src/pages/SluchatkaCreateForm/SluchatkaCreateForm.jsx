import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createSluchatka } from "../../models/Sluchatka";

export default function SluchatkaCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const sluchatka = await createSluchatka(formData);
    if (sluchatka.status === 201) {
      redirectToSuccessPage(sluchatka.payload._id);
    } else {
      setInfo(sluchatka.msg);
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
    return navigate(`/createdsluchatka/${id}`);
  };

  return (
    <>
      <h1>Sluchatka create form</h1>

      <form>
        <input
          type="text"
          required
          name="znacka"
          placeholder="Enter znacka"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="hlasitost"
          placeholder="Enter hlasitost"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create sluchatka</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
