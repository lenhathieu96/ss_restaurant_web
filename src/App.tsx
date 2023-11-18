import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
], {basename: '/ss_restaurant_web'});

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
