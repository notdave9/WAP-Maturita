import { Link, useParams } from "react-router-dom";

export default function SluchatkaDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your sluchatka {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
