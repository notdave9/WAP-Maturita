import { Link } from "react-router-dom";
import MonitorLink from "./MonitorLink";
import { useState, useEffect } from "react";
import { getAllMonitors } from "../../models/Monitor";

export default function MonitorList() {
  const [monitors, setMonitors] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllMonitors();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMonitors(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Monitors not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Monitors are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Monitor list</h1>
      {
        monitors.map((monitor, index) => (
            <MonitorLink key={index} znacka={monitor.znacka} id={monitor._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
