import React from "react";
import CarIcon from "../assets/car.svg";
import BusIcon from "../assets/bus.svg";
import PersonIcon from "../assets/person.svg";
import BikeIcon from "../assets/bike.svg";
import LocationIcon from "../assets/location.svg";
import ArrowIcon from "../assets/arrow.svg";
import DotsIcon from "../assets/dots.svg";
import NetworkingIcon from "../assets/networking.svg";
import TwoArrowsIcon from "../assets/twoArrows.svg";
import "../styles/map_component.css"; 

const MapComponent = () => {
  return (
    <div className="map-container">
 
      <div className="navbar">
        <div className="navbar-content">
          <img src={ArrowIcon} alt="Back" className="arrow-icon" />
          <input
            type="text"
            value="NIT Puducherry, Karaikal, 609 609"
            className="location-input"
            readOnly
          />
          <img src={DotsIcon} alt="Options" className="dots-icon" />
        </div>
        <div className="networking-icon">
          <img src={NetworkingIcon} alt="Networking" className="networking-icon-img" />
        </div>
        <div className="transport-icons">
          <img src={CarIcon} alt="Car" className="transport-icon" />
          <img src={BusIcon} alt="Bus" className="transport-icon" />
          <img src={PersonIcon} alt="Person" className="transport-icon" />
          <img src={BikeIcon} alt="Bike" className="transport-icon" />
        </div>
      </div>

      <div className="floating-buttons">
        <button className="location-btn">
          <img src={LocationIcon} alt="Location" className="location-icon" />
        </button>
        <button className="two-arrows-btn">
          <img src={TwoArrowsIcon} alt="Two Arrows" className="two-arrows-icon" />
        </button>
      </div>
    </div>
  );
};

export default MapComponent;

