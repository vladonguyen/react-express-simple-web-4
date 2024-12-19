import { useLoaderData } from "react-router";
import AllPosts from "../subComponents/AllPosts";

export default function Home(){
    const posts = useLoaderData();

    return (
        <>
        <h1>All Posts</h1>
        {posts.map((post) => <AllPosts id={post.id} title={post.title} desc={post.desc} />)}
        </>
    )
}


export async function loaderAllPosts(){
   try {
    const response = await fetch("http://localhost:3000/posts/", {
        header: {
            "Content-Type": "application/json"
        },
        method: "GET"
    });

    const resData = await response.json();

    return resData
   } catch (error) {
    throw error;
   }
    
}