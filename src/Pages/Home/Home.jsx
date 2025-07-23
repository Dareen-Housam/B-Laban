import CoreValues from "../../Components/CoreValues/CoreValues";
import DessertGallery from "../../Components/DessertGallery/DessertGallery";
import Hero from "../../Components/Hero/Hero";
import LatestAdv from "../../Components/LatestAdv/LatestAdv";
import SkilledWorker from "../../Components/SkilledWorker/SkilledWorker";
import Subscribe from "../../Components/Subscribe/Subscribe";

function Home() {
  return (
    <div className="blaban-website">
      <Hero />
      <DessertGallery />
      <CoreValues />
      <LatestAdv />
      <SkilledWorker />
      <Subscribe />
    </div>
  );
}

export default Home;
