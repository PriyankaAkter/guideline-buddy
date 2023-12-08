import Footer from "./components/layout/Footer/Footer";
import DesktopNavbar from "./components/layout/Navbar/DesktopNavbar";
import Navbar from "./components/layout/Navbar/Navbar";

function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <DesktopNavbar /> */}
      <Navbar />
      {children}
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
