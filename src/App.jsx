import Navbar from "./components/Navbar/Navbar";
import MyCarousel from "./components/Crousel/MyCarousel";
import Image from "./components/Crousel/Image";
import { banners } from "./config";
import CardList from "./CardList";

function App() {
  return (
    <>
      <header className="bg-white drop-shadow-xl py-3">
        <Navbar />
      </header>
      <main>
        <section>
          <MyCarousel className={"xs:mx-0 sm:mx-5 md:mx-10 -z-20"}>
            {banners.map((item) => (
              <Image key={item.id} item={item} />
            ))}
          </MyCarousel>
        </section>
        <CardList title="Top Picks" />
      </main>
    </>
  );
}

export default App;
