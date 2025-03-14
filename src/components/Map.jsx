import React from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

// Deine Länder- und Kürzel-Mapping-Datei (countryCodes.js)
import countryCodes from "../navigation/CountryCodes";

const Map = () => {
  const navigate = useNavigate(); // Verwenden von useNavigate für das Routing

  // Methode, die die Landseite aufruft
  const goToLandseite = (countryCode) => {
    // Die Methode erwartet jetzt das Länderkürzel und bekommt den vollständigen Ländernamen
    const landName = countryCodes[countryCode];
    console.log(`Navigiere zu: ${landName} (${countryCode})`); // Loggt den Ländernamen und das Kürzel

    if (landName) {
      // Navigiere zur Länderseite mit dem vollen Ländernamen in der URL
      navigate(`/land/${landName}`);
    } else {
      console.error("Länderkürzel nicht gefunden");
    }
  };

  // Funktion, um das Land anhand der Koordinaten zu ermitteln und die Landseite aufzurufen
  const getCountryFromCoordinates = async (lat, lng) => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
      const response = await fetch(url);
      const data = await response.json();

      // Überprüfen, ob wir ein Land und den Ländercode erhalten haben
      if (data?.address?.country_code) {
        const countryCode = data.address.country_code.toUpperCase(); // ISO-Code für URL nutzen
        console.log(`Länderkürzel aus den Koordinaten: ${countryCode}`); // Loggt das Länderkürzel
        goToLandseite(countryCode); // Aufruf der goToLandseite mit dem Länderkürzel
      } else {
        console.warn("Kein Land gefunden für diese Koordinaten");
      }
    } catch (error) {
      console.error("Fehler bei der Geocoding-Abfrage:", error);
    }
  };

  // ClickableMap-Komponente für das Klicken auf die Karte
  const ClickableMap = () => {
    useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng; // Koordinaten des Klicks
        console.log(`Geklickt auf Koordinaten: Lat: ${lat}, Lng: ${lng}`); // Konsolenausgabe mit den Koordinaten
        getCountryFromCoordinates(lat, lng); // Koordinaten an die Funktion übergeben
      },
    });

    return null; // Diese Komponente rendert nichts direkt
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <div style={{ width: "95%", height: "400px" }}>
        <MapContainer center={[20, 0]} zoom={2} style={{ width: "100%", height: "100%" }}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
          />
          <ClickableMap /> {/* Die interaktive Karte */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
