import Button from "../Button";

function Card({ item, className }) {
  return (
    <li
      className={
        "xs:mx-auto  w-[250px]  rounded-md flex flex-col p-2.5 bg-gray-200 custom-shadow my-2 " +
        className
      }
    >
      <img src={item.images_urls[0]} alt={item.title} className="rounded-xl " />
      <h3 className="font-semibold">{item.brand}</h3>
      <div className="overflow-hidden">
        <h3 className="font-normal whitespace-nowrap">{item.title}</h3>
      </div>
      <h3>{"$ " + Math.round(item.price / 100)}</h3>
      <Button title="Add to Cart" />
    </li>
  );
}

export default Card;
