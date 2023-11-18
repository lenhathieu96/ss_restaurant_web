import LoginPage from './pages/login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
], {basename: ''});

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
