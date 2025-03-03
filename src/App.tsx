import "./App.css";
import { Navbar } from "./components/navbar.tsx";
import { Footer } from "./components/footer.tsx";
import { Homepage } from "./components/homepage.tsx";
import { AboutMe } from "./components/aboutMe.tsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { Projects } from "./components/projects.tsx";
import { Future } from "./components/future.tsx";

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
        { path: "/portfolio", element: <Homepage /> },
        { path: "/AboutMe", element: <AboutMe /> },
        { path: "/Projects", element: <Projects /> },
        { path: "/Future", element: <Future /> },
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
