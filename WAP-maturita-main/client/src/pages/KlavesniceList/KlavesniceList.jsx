import { Link } from "react-router-dom";
import KlavesniceLink from "./KlavesniceLink";
import { useState, useEffect } from "react";
import { getAllKlavesnices } from "../../models/Klavesnice";

export default function KlavesniceList() {
  const [klavesnices, setKlavesnices] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllKlavesnices();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setKlavesnices(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Klavesnices not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Klavesnices are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Klavesnice list</h1>
      {
        klavesnices.map((klavesnice, index) => (
            <KlavesniceLink key={index} znacka={klavesnice.znacka} id={klavesnice._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
