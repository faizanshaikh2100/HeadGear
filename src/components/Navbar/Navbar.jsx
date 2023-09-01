import MainLogo from "./mainLogo";
import Menu from "./Menu";
import MySection from "./MySection";

function Navbar() {
  return (
    <div className="flex items-center justify-between container">
      <MainLogo />
      <Menu />

      <MySection />
    </div>
  );
}

export default Navbar;
