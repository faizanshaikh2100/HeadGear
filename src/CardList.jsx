import { cardItems } from "./config";
import Card from "./components/Card";
function CardList({ title }) {
  return (
    <div className="container mt-10">
      <h3
        className="text-4xl xs:text-center md:text-start"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {" "}
        {title}
      </h3>
      <br />
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 sm:grid-cols-2 xs:grid-cols-2 place-content-center ">
        {cardItems.map((item) =>
          [
            "Wired Headphones",
            "Wireless Headphones",
            "True Wireless Earbuds",
            "Wired Earphones",
            "Wireless Earphones",
            "Speakers",
          ].includes(item.product_type) ? (
            <Card
              key={item.id}
              item={item}
              className="xs:w-[200px] sm:w-[250px]"
            />
          ) : (
            <></>
          )
        )}
      </ul>
    </div>
  );
}

export default CardList;
