import "./Gallery.css";

export default function Gallery({images}) {
  return (
    <div className="Gallery">
      <div className="Gallery__list">
        {images.map(image, idx => (
          return ()
            <img
              key={idx}
              className="Gallery__photo"
              src={image}
            />
          );
        })}
      </div>
    </div>
   )
 }