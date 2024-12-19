import { Form, Link, redirect, useLoaderData } from "react-router";

export default function SinglePost(){
    const singlePost = useLoaderData();
    console.log("singlePost", singlePost);
    

    return (
        <>
        <div>
            <h2>{singlePost.title}</h2>
            <p>{singlePost.desc}</p>
        </div>

        <div className="editOrDel">
            <Link to={"edit"}>Edit</Link>
            <Form method="POST"><button>Delete</button></Form>
        </div>

        </>
    )
}

export async function loaderSinglePost({params}){
    try {
        const id = params.id;

        const response = await fetch("http://localhost:3000/posts/" + id, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        const resData = await response.json();
    
        return resData
    } catch (error) {
        throw error;
    }  

}

export async function actionDelete({params}){
 if(window.confirm("Do you want to delete?")){
    const response = await fetch(`http://localhost:3000/posts/${params.id}/delete`, {
        headers: {"Content-Type": "application/json"},
        method: "DELETE"
    });

    return redirect("/");
 } else {
    return null
 }
    
}