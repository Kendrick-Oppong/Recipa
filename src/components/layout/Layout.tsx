import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CookieAnnouncementBanner, ScrollToTop } from "../shared";

 const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <CookieAnnouncementBanner />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout