import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App"; // Import your App component

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />, // This should wrap your entire app or define nested routes here
      children: [
        // Add nested routes here if needed
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
