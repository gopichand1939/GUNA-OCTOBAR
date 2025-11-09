import React from "react";
import FleetCard from "./FleetCard.jsx";
import LuxuryCoach from "../../assets/LuxuryCoach.png";
import MiniBus from "../../assets/MiniBus.png";
import ExcutiveSadan from "../../assets/ExcutiveSadan.png";
import SUVLargeVehicle from "../../assets/SUVLargeVehicle.png";
import TempoTraveller from "../../assets/TempoTraveller.png";
import SchoolBus from "../../assets/SchoolBus.png";

const fleet = [
  { id: 1, image: LuxuryCoach, title: "Luxury Coach", subtitle: "Full-Size Bus", capacity: "45–50 passengers", features: ["AC","Reclining Seats","Entertainment System","Luggage Space"] },
  { id: 2, image: MiniBus, title: "Mini Bus", subtitle: "Compact Bus", capacity: "18–25 passengers", features: ["AC","Comfortable Seating","GPS Tracking","First Aid Kit"] },
  { id: 3, image: ExcutiveSadan, title: "Executive Sedan", subtitle: "Premium Car", capacity: "4 passengers", features: ["Luxury Interior","AC","Professional Driver","Wi-Fi"] },
  { id: 4, image: SUVLargeVehicle, title: "SUV", subtitle: "Family Vehicle", capacity: "6–8 passengers", features: ["Spacious","AC","Entertainment System","Charging Ports"] },
  { id: 5, image: TempoTraveller, title: "Tempo Traveller", subtitle: "Medium Van", capacity: "12–17 passengers", features: ["AC","Push Back Seats","Music System","Ample Luggage Space"] },
  { id: 6, image: SchoolBus, title: "School Bus", subtitle: "Student Transport", capacity: "40–45 passengers", features: ["GPS Tracking","CCTV","First Aid","Safety Belts"] }
];

const FleetGrid = () => (
  <section className="py-12 sm:py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {fleet.map((v) => <FleetCard key={v.id} {...v} />)}
      </div>
    </div>
  </section>
);

export default FleetGrid;
