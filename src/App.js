//React router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// Pages & Components
import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home"
import Branding from "./pages/Branding/Branding";
import SocialMedia from "./pages/SocialMedia/SocialMedia";
import Marketing from "./pages/Marketing/Marketing";
import Programing from "./pages/Programing/Programing";
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact";



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="branding" element={<Branding />} />
          <Route path="socialmedia" element={<SocialMedia />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="programing" element={<Programing />} />
          <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
