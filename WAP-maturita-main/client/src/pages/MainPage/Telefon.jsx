import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function TelefonPage() {
  return (
    <>
      <Link to="/createtelefon">
        <p>Telefon create form</p>
      </Link>
      <Link to="/updatetelefon/df46g65df4g6df">
        <p>Telefon update form</p>
      </Link>
      <Link to="/telefons">
        <p>Telefon list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
