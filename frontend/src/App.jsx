import Create from "./components/Create"
import Home, { loaderAllPosts } from "./components/Home"
import Rootlayout from "./components/RootLayout"
import { createBrowserRouter, RouterProvider } from "react-router"
import SinglePost, { actionDelete, loaderSinglePost } from "./components/SinglePost"
import Edit, { loaderEdit } from "./components/Edit"
import { actionFormSubmit } from "./subComponents/CreateEditForm"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: loaderAllPosts
        },
        {
          path: "/create",
          element: <Create />,
          action: actionFormSubmit
        },
        {
          path: "/posts/:id",
          children: [
            {
              index: true,
              element: <SinglePost />,
              loader: loaderSinglePost,
              action: actionDelete
            },
            {
              path: "edit",
              element: <Edit />,
              loader: loaderEdit,
              action: actionFormSubmit
            }
          ]
        }
      ]
    }
  ])


  return <RouterProvider router={router} />
}

export default App
