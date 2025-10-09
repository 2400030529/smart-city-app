import React from "react";
import "./CityServices.css";

const CityServices = () => {
  const services = [
    {
      title: "Water Supply",
      description:
        "Check water availability, report leaks, and access municipal water services.",
    },
    {
      title: "Electricity",
      description:
        "Report power outages, pay bills, and access electricity services online.",
    },
    {
      title: "Waste Management",
      description:
        "Schedule pickups, report garbage issues, and track waste collection.",
    },
    {
      title: "Public Transport",
      description:
        "Check bus schedules, report issues, and get transport updates.",
    },
  ];

  return (
    <div className="city-services-container">
      <h2>City Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityServices;
