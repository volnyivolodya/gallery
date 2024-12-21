import Gallery from "./components/Gallery";
import {useState} from "react";

function App() {
  const [pos, setPos] = useState(0)

  return (
    <Gallery
      images={[
        "/images/image 1.jpg",
        "/images/image 2.jpg",
        "/images/image 3.jpg",
        "/images/image 1.jpg",
        "/images/image 2.jpg",
        "/images/image 3.jpg",
      ]}

      pos={pos}

      onPrev={() => {
        setPos(pos - 1);
      }}

      onNext={() => {
        setPos(pos + 1);
      }}
    />
  );
}

export default App;
