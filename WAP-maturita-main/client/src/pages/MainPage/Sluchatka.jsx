import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SluchatkaPage() {
  return (
    <>
      <Link to="/createsluchatka">
        <p>Sluchatka create form</p>
      </Link>
      <Link to="/updatesluchatka/df46g65df4g6df">
        <p>Sluchatka update form</p>
      </Link>
      <Link to="/sluchatkas">
        <p>Sluchatka list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
