import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";
function MySection() {
  return (
    <div className="hidden md:flex items-center gap-3 pr-10 ">
      <IoIosContact size={35} className="icon" />
      <FaShoppingCart size={30} className="icon" />
    </div>
  );
}
export default MySection;
