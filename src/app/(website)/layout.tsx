import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/NavBar/NavBar";
// import DesktopNavbar from "./components/layout/Navbar/DesktopNavbar";


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
