import { useParams, Link } from "react-router-dom";

export default function CreatedSluchatka() {
  const { id } = useParams();

  return (
    <>
      <p>Sluchatka was created: {id}</p>
      <Link to={`/sluchatka/${id}`}>
        <p>View sluchatka</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
