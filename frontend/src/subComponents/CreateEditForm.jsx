import { Form, redirect, useNavigate } from "react-router";
import classes from "./CreateEditForm.module.css";

export default function CreateEditForm({ method, id, title, desc }) {
    console.log(id, title, desc);
    

    return <>
        <Form method={method} className={classes.formCreateEdit}>
            <input name="title" placeholder="title" defaultValue={title ? title : ""} />
            <textarea name="desc" placeholder="desc" defaultValue={desc ? desc : ""}/>
            <button>{(method === "POST" ? "Create" : "Edit")}</button>
        </Form>
    </>

}

export async function actionFormSubmit({ request, params }) {
    const method = request.method;
 
   
   
    try {
        const formData = await request.formData();
        const newPost = {
            title: formData.get("title"),
            desc: formData.get("desc")
        }

        let url;
        let id;

        if(method === "POST"){
            url = "http://localhost:3000/posts/create";
        }else if(method === "PATCH"){
            id = params.id;
            url = `http://localhost:3000/posts/${id}/edit`;
            newPost.id = id;
        }

     
        const response = await fetch(url, {
            headers: { "Content-Type": "application/json" },
            method: method,
            body: JSON.stringify(newPost)
        });

        const resData = await response.json();

        return redirect("/");

        //todo validations

    } catch (error) {
        throw error;
    }



}