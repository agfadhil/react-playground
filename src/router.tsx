import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import BasicForm from "./pages/BasicForm/index.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/basic-form", element: <BasicForm /> },
]);

export default router;
