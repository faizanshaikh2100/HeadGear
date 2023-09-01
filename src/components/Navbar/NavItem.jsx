function NavItem({ item, className }) {
  return (
    <li className={"flex gap-1 items-center " + className}>
      <span>{item.icon}</span>
      <h3>{item.name}</h3>
    </li>
  );
}
export default NavItem;
