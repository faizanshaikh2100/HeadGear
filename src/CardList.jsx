// import { cardItems } from "./config";
import Card from "./components/Card";
function CardList({ title, dataArray }) {
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
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-3 place-content-center ">
        {dataArray.map((item) => (
          <Card
            key={item.id}
            item={item}
            className="xs:w-[170px] sm:w-[250px] "
          />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
