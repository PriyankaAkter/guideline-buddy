import Footer from "./components/layout/Footer/Footer";
import DesktopNB from "./components/layout/Navbar/DesktopNB";


// import DesktopNavbar from "./components/layout/Navbar/DesktopNavbar";


function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <DesktopNavbar /> */}
      <DesktopNB />
      {children}
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
