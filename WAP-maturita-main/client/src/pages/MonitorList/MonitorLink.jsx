import { Link } from "react-router-dom"

export default function MonitorLink(props) {

    return (
        <>
            <p>Znacka: {props.znacka}</p>
            <Link to={`/monitor/${props.id}`}>
                <p>View monitor</p>
            </Link>
        </>
    )
}