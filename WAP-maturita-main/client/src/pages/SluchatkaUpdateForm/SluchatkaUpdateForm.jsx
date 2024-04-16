import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateSluchatka, getSluchatkaById } from "../../models/Sluchatka";

export default function SluchatkaUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [sluchatka, setSluchatka] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSluchatkaById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSluchatka(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const sluchatka = await updateSluchatka(id, formData);
    if (sluchatka.status === 200) {
      redirectToSuccessPage(sluchatka.payload._id);
    } else {
      setInfo(sluchatka.msg);
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
    return navigate(`/sluchatka/${id}`);
  };

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
      <h1>Sluchatka update form</h1>

      <form>
        <input
          type="text"
          required
          name="znacka"
          placeholder="Enter znacka"
          defaultValue={sluchatka.znacka}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="hlasitost"
          placeholder="Enter hlasitost"
          defaultValue={sluchatka.hlasitost}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update sluchatka</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
