import "./Gallery.css";

export default function Gallery({images, pos, onPrev, onNext}) {
  pos = pos || 0;


  const prevImage = images[pos -1];
  const curImage = images[pos];
  const nextImage = images[pos +1];

  return (
    <div className="Gallery">
      <div className="Gallery__list">
        {prevImage ? (
           <img
             className="Gallery__photo"
             src={prevImage}
           />
        ) : (
          <div className="Gallery__photo"/>
        )}
        {curImage ? (
           <img
             className="Gallery__photo"
             src={curImage}
           />
        ) : (
          <div className="Gallery__photo"/>
        )}

        {nextImage ? (
           <img
             className="Gallery__photo"
             src={nextImage}
           />
        ) : (
          <div className="Gallery__photo"/>
        )}
      </div>

      <div className="Gallery__buttons">
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
   )
 }