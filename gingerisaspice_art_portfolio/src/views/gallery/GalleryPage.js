import "./GalleryPage.css";

import Header from "../../components/header/Header.js";
import Navigation from "../../components/header/Navgation.js";
import Gallery from "../../components/gallery/Gallery.js";

export default function GalleryPage() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Gallery />
    </div>
  );
}
