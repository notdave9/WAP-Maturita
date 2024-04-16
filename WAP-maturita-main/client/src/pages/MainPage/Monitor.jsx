import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function MonitorPage() {
  return (
    <>
      <Link to="/createmonitor">
        <p>Monitor create form</p>
      </Link>
      <Link to="/updatemonitor/df46g65df4g6df">
        <p>Monitor update form</p>
      </Link>
      <Link to="/monitors">
        <p>Monitor list</p>
      </Link>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}
