import "./Gallery.scss";

const galleryImages = [
  {
    title: "image1",
    path: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "image2",
    path: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "image3",
    path: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "image4",
    path: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function Gallery() {
  return (
    <div>
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image.path} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
