import NavItem from "./components/Navbar/NavItem";
import { navItems } from "./config";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
function MobileMenu({ className }) {
  return (
    <div className="absolute left-0  w-full bg-white ">
      <ul className={"md:hidden gap-5 " + className}>
        {navItems.map((item) => (
          <NavItem
            item={item}
            key={item.id}
            className={"py-3 pl-2 border border-b-zinc-300 w-full"}
          />
        ))}
        <li
          className={
            "flex gap-1 pl-2 items-center border border-b-zinc-300 py-3 w-full"
          }
        >
          <span>
            <IoIosContact size={30} className="icon" />
          </span>
          <h3>Your Account</h3>
        </li>
        <li
          className={
            "flex gap-1 pl-2 items-center border border-b-zinc-300 py-3 w-full"
          }
        >
          <span>
            <FaShoppingCart size={25} className="icon" />
          </span>
          <h3>Cart</h3>
        </li>
        <div className="w-full bg-white h-[100vh] "></div>
      </ul>
    </div>
  );
}

export default MobileMenu;
