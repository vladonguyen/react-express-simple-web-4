import { Link } from "react-router";

export default function AllPosts({id, title, desc}) {
    console.log("id", id)

    return (
        <div key={id}>
            <Link to={`posts/${id}`}>
            <h2>{title}</h2>
            <p>{desc}</p>
            </Link>
        </div>
    )
}