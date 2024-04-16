import { Link, useParams } from "react-router-dom";

export default function TelefonDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your telefon {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
