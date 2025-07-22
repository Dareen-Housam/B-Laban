import "./DessertGallery.css";

function DessertGallery() {
  const images = [
    "https://blaban.net/data/files/oma.jpg",
    "https://blaban.net/data/files/rbo.jpg",
    "https://blaban.net/data/files/cash.jpg",
    "https://blaban.net/data/files/kas.jpg",
    "https://blaban.net/data/files/bom.jpg",
  ];

  return (
    <section className="dessert-gallery bg-custom">
      <div className="gallery-row">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Dessert ${index + 1}`}
            className={`gallery-img rotate-${index % 5}`}
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
}

export default DessertGallery;
