import { Link } from "react-router-dom"

export default function KlavesniceLink(props) {

    return (
        <>
            <p>Name: {props.znacka}</p>
            <Link to={`/klavesnice/${props.id}`}>
                <p>View klavesnice</p>
            </Link>
        </>
    )
}