import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="container">
        <h2>Elérhetöség</h2>
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
        <div className="row">
          <div className="col-6">
            <p>email cim</p>
          </div>
          <div className="col-6">
            <p>telefonszám</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
