import "./App.css";
import { Navbar } from "./components/navbar.tsx";
import { Footer } from "./components/footer.tsx";
import { AboutMe } from "./components/aboutMe.tsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.tsx";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <AboutMe /> },
        { path: "/AboutMe", element: <AboutMe /> },
        { path: "/Projects", element: <AboutMe /> },
        { path: "/Future", element: <AboutMe /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
