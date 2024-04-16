import { Link, useParams } from "react-router-dom";

export default function KlavesniceDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your klavesnice {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
