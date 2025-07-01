import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import BasicForm from "./pages/BasicForm/index.tsx";
import ReactPdf from "./pages/ReactPdf/index.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/basic-form", element: <BasicForm /> },
  { path: "/react-pdf", element: <ReactPdf /> },
]);

export default router;
