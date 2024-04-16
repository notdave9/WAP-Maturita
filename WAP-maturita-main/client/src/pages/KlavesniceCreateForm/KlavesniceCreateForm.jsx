import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createKlavesnice } from "../../models/Klavesnice";

export default function KlavesniceCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const klavesnice = await createKlavesnice(formData);
    if (klavesnice.status === 201) {
      redirectToSuccessPage(klavesnice.payload._id);
    } else {
      setInfo(klavesnice.msg);
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
    return navigate(`/createdklavesnice/${id}`);
  };

  return (
    <>
      <h1>Klavesnice create form</h1>

      <form>
        <input
          type="text"
          required
          name="znacka"
          placeholder="Enter znacka"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="mechanika"
          placeholder="Enter zda je mechanika"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="boolean"
          required
          name="podsviceni"
          placeholder="Enter zda je  podsviceni"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create klavesnice</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
