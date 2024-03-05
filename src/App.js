//React router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// Pages & Components
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Branding from "./pages/Branding/Branding";
import SocialMedia from "./pages/SocialMedia/SocialMedia";
import Marketing from "./pages/Marketing/Marketing";
import Programing from "./pages/Programing/Programing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import SignIn from "./dashboard/SignIn/SignIn";
import Auth from "./utiles/Auth";
import ResponsiveDrawer from "./dashboard/Drawer/ResponsiveDrawer";
import Sale from "./dashboard/Sale/Sale";
import Video from "./dashboard/Video/Video";
import Images from "./dashboard/Images/Images";
import Services from "./dashboard/Services/Services";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="branding" element={<Branding />} />
          <Route path="socialmedia" element={<SocialMedia />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="programing" element={<Programing />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="admin" element={<SignIn />} />

        <Route element={<Auth />}>
          {/* Start Protected route */}
          <Route path="dashboard" element={<ResponsiveDrawer />}>
            <Route path="sale" element={<Sale />} />
            <Route path="images" element={<Images />} />
            <Route path="video" element={<Video />} />
            <Route path="services" element={<Services />} />
          </Route>
          {/* End Protected route */}
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
