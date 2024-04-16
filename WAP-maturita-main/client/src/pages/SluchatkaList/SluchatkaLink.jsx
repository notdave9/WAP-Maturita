import { Link } from "react-router-dom"

export default function SluchatkaLink(props) {

    return (
        <>
            <p>Name: {props.znacka}</p>
            <Link to={`/sluchatka/${props.id}`}>
                <p>View sluchatka</p>
            </Link>
        </>
    )
}