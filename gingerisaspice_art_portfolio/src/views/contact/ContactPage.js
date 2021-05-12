import "./ContactPage.css";

import Header from "../../components/header/Header.js";
import Navigation from "../../components/header/Navgation.js";
import ContactForm from "../../components/contact/ContactForm.js"

export default function ContactPage() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <ContactForm />
    </div>
  );
}