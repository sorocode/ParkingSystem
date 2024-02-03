import Header from "./components/Header";
import Input from "./components/Input";
import ParkList from "./components/ParkList";
import MainRoute from "./pages/MainRoute";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import CarDetail, { loader as carDetailLoader } from "./pages/CarDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainRoute />,
      },
      { path: "login", element: <Login /> },
      { path: "car/:carId", element: <CarDetail />, loader: carDetailLoader },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
