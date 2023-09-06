function NavItem({ item, className }) {
  return (
    <div className="cursor_pointer">
      <li className={"flex gap-1 items-center " + className}>
        <span>{item.icon}</span>
        <h3>{item.name}</h3>
      </li>
    </div>
  );
}
export default NavItem;
