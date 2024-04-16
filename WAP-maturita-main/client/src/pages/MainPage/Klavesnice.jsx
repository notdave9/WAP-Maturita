import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function KlavesnicePage() {
  return (
    <>
      <Link to="/createklavesnice">
        <p>Klavesnice create form</p>
      </Link>
      <Link to="/updateklavesnice/df46g65df4g6df">
        <p>Klavesnice update form</p>
      </Link>
      <Link to="/klavesnices">
        <p>Klavesnice list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
