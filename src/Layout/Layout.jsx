// React router
import { Outlet } from "react-router-dom";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
