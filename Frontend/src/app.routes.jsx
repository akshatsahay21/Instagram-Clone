import { createBrowserRouter } from "react-router"
import Login from "./Features/auth/pages/Login"
import Register from "./Features/auth/pages/Register"
import Feed from "./Features/posts/pages/Feed"
import CreatePost from "./Features/posts/pages/CreatePost"


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/',
        element: <Feed />
    },
    {
        path: "/create-post",
        element: <CreatePost />
    }
])