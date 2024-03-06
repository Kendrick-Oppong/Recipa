import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ScrollToTop } from "../shared";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </div>
  );
};
