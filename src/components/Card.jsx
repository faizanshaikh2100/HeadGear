function Card({ item, className }) {
  return (
    <li
      className={
        "xs:mx-auto  w-[250px]  rounded-md flex flex-col p-2.5 bg-gray-200 custom-shadow my-2 " +
        className
      }
    >
      <img src={item.image1src} alt={item.title_main} className="rounded-xl " />
      <h3 className="font-semibold">{item.brand}</h3>
      <div className="overflow-hidden">
        <h3 className="font-normal whitespace-nowrap">{item.title_main}</h3>
      </div>
      <h3>{"$" + item.price}</h3>
    </li>
  );
}

export default Card;
