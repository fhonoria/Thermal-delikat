import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Contact.css";

function Contact(props) {
  let content = {
    Magyar: {
      contacttitel: "Elérhetőség",
      openinghours: "Nyitva tartási idő: minden nap 9:00-18:00",
    },
    Deutsch: {
      contacttitel: "Kontakt",
      openinghours: "Öffnungszeiten: jeden Tag 9:00-18:00",
    },
    English: {
      contacttitel: "Contact",
      openinghours: "Opening hours: every day 9:00-18:00",
    },
    Čeština: {
      contacttitel: "Kontakt",
      openinghours: "Otevírací doba: denně 9:00-18:00",
    },
  };

  props.language === "Deutsch"
    ? (content = content.Deutsch)
    : props.language === "English"
    ? (content = content.English)
    : props.language === "Čeština"
    ? (content = content.Čeština)
    : (content = content.Magyar);

  return (
    <div className="Contact">
      <section>
        <div className="container">
          <h2>{content.contacttitel}</h2>
          <h5>9740 Bük, Termál krt. 2/A</h5>
          <br />
          <h5 className="mb-4">{content.openinghours}</h5>
          <div className="leaflet-container">
            <MapContainer center={[47.379789, 16.786528]} zoom={17}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[47.379789, 16.786528]}>
                <Popup>Thermál delikát</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
