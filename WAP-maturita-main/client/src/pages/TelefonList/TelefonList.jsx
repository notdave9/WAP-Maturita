import { Link } from "react-router-dom";
import TelefonLink from "./TelefonLink";
import { useState, useEffect } from "react";
import { getAllTelefons } from "../../models/Telefon";

export default function TelefonList() {
  const [telefons, setTelefons] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllTelefons();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTelefons(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Telefons not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Telefons are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Telefon list</h1>
      {
        telefons.map((telefon, index) => (
            <TelefonLink key={index} znacka={telefon.znacka} id={telefon._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
