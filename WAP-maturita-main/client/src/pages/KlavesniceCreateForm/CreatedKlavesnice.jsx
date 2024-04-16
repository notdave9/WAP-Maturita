import { useParams, Link } from "react-router-dom";

export default function CreatedKlavesnice() {
  const { id } = useParams();

  return (
    <>
      <p>Klavesnice was created: {id}</p>
      <Link to={`/klavesnice/${id}`}>
        <p>View klavesnice</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
