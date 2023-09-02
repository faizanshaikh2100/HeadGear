import MainLogo from "./mainLogo";
import Menu from "./Menu";
import MySection from "./MySection";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
function Navbar({ mobileMenu, setMobileMenu }) {
  return (
    <div className="flex items-center justify-between container">
      <MainLogo />
      <Menu />
      {!mobileMenu ? (
        <GiHamburgerMenu
          color={"#ef4444"}
          size={30}
          className="md:hidden mr-auto"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      ) : (
        <IoMdClose
          color={"#ef4444"}
          size={40}
          className="md:hidden mr-auto"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <MySection />
    </div>
  );
}

export default Navbar;
