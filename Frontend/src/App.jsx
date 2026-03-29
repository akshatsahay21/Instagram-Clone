import { RouterProvider } from "react-router"
import { router } from "./app.routes"
import { AuthProvider } from "./Features/auth/auth.context"
import "./Features/shared/global.scss"
import { PostContextProvider } from "./Features/posts/post.context"


function App() {

  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App