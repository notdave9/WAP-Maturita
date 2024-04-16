import { Link } from "react-router-dom"

export default function TelefonLink(props) {

    return (
        <>
            <p>Znacka:: {props.znacka}</p>
            <Link to={`/telefon/${props.id}`}>
                <p>View telefon</p>
            </Link>
        </>
    )
}