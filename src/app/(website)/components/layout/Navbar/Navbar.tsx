import React from "react";

import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavBar";

const Navbar = () => {
  return (
    <div>
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
