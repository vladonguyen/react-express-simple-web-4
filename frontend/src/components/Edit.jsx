import { useLoaderData } from "react-router";
import CreateEditForm from "../subComponents/CreateEditForm";

export default function Edit(){
    const {id, title, desc} = useLoaderData();

    return (
        <>
        <h1>Edit</h1>
        <CreateEditForm method="PATCH" id={id} title={title} desc={desc} />
        </>
    )
}

export async function loaderEdit({params}){
const id = params.id;
const response = await fetch("http://localhost:3000/posts/" + id, {
    headers: {"Content-Type": "application/json"}
});

const resData = await response.json();

return resData
}