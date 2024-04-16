import { Link } from "react-router-dom";
import SluchatkaLink from "./SluchatkaLink";
import { useState, useEffect } from "react";
import { getAllSluchatkas } from "../../models/Sluchatka";

export default function SluchatkaList() {
  const [sluchatkas, setSluchatkas] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllSluchatkas();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSluchatkas(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Sluchatkas not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Sluchatkas are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Sluchatka list</h1>
      {
        sluchatkas.map((sluchatka, index) => (
            <SluchatkaLink key={index} znacka={sluchatka.znacka} id={sluchatka._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
