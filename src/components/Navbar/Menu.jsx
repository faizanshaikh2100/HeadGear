import { navItems } from "../../config";
import NavItem from "./NavItem";
// IoMdMenu
function Menu({ className }) {
  return (
    <ul className={"hidden md:flex gap-5 " + className}>
      {navItems.map((item) => (
        <NavItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default Menu;
