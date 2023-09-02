import Navbar from "./components/Navbar/Navbar";
import MyCarousel from "./components/Crousel/MyCarousel";
import Image from "./components/Crousel/Image";
import { banners } from "./config";
import CardList from "./CardList";
import { useTopPicks } from "./Service";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
function App() {
  const topPicks = useTopPicks();
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="bg-white drop-shadow-xl py-3">
        <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      </header>
      {!mobileMenu ? (
        <main>
          <section>
            <MyCarousel className={"xs:mx-0 sm:mx-5 md:mx-10 -z-20"}>
              {banners.map((item) => (
                <Image key={item.id} item={item} />
              ))}
            </MyCarousel>
          </section>
          <CardList
            title="Top Picks in Headphones"
            categories={["Wired Headphones", "Wireless Headphones"]}
            dataArray={topPicks}
          />
          <CardList
            title="Top Picks in Earphones"
            categories={["Wired Earphones", "Wireless Earphones"]}
            dataArray={topPicks}
          />
        </main>
      ) : (
        <MobileMenu />
      )}
    </>
  );
}

export default App;
