import { useParams, Link } from "react-router-dom";

export default function CreatedMonitor() {
  const { id } = useParams();

  return (
    <>
      <p>Monitor was created: {id}</p>
      <Link to={`/monitor/${id}`}>
        <p>View monitor</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
