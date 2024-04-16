import { useParams, Link } from "react-router-dom";

export default function CreatedTelefon() {
  const { id } = useParams();

  return (
    <>
      <p>Telefon was created: {id}</p>
      <Link to={`/telefon/${id}`}>
        <p>View telefon</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
