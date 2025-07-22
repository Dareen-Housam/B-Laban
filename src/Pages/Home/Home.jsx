import CoreValues from "../../Components/CoreValues/CoreValues";
import DessertGallery from "../../Components/DessertGallery/DessertGallery";
import Hero from "../../Components/Hero/Hero";
import LatestAdv from "../../Components/LatestAdv/LatestAdv";
import SkilledWorker from "../../Components/SkilledWorker/SkilledWorker";

function Home() {
  return (
    <div className="blaban-website">
      <Hero />
      <DessertGallery />
      <CoreValues />
      <LatestAdv />
      <SkilledWorker />
    </div>
  );
}

export default Home;
