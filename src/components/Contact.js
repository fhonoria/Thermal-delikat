import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Contact.css";
import { Text } from "../containers/LanguageProvider";

function Contact() {
  return (
    <div className="Contact">
      <section>
        <div className="container">
          <h2>
            <Text tid="contact-titel" />
          </h2>
          <h5 className="mb-4">
            <Text tid="opening-hours" />
          </h5>
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
