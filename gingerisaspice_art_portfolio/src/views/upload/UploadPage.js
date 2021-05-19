import "./UploadPage.css";

import Header from "../../components/header/Header.js";
import Navigation from "../../components/header/Navgation.js";
import Upload from "../../components/upload/Upload.js"

export default function UploadPage() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Upload />
    </div>
  );
}