import Footer from "./components/layout/Footer/Footer"
import DesktopNavbar from "./components/layout/Navbar/DesktopNavbar"


function WebsiteLayout({children}: {
    children: React.ReactNode
  }) {
  return (
    <div>
       {/* <Navbar /> */}
       <DesktopNavbar />
          {children}
          {/* <NewsLetter /> */}
          <Footer />
          
    </div>
  )
}

export default WebsiteLayout