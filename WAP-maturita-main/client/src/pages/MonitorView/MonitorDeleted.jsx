import { Link, useParams } from "react-router-dom";

export default function MonitorDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your monitor {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
