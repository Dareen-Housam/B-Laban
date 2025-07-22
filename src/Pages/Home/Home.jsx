import CoreValues from "../../Components/CoreValues/CoreValues";
import DessertGallery from "../../Components/DessertGallery/DessertGallery";
import Hero from "../../Components/Hero/Hero";
import LatestAdv from "../../Components/LatestAdv/LatestAdv";

function Home() {
  return (
    <div className="blaban-website">
      <Hero />
      <DessertGallery />
      <CoreValues />
      <LatestAdv />
    </div>
  );
}

export default Home;
