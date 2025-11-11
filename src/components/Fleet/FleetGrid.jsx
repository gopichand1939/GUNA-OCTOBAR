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
  { id: 6, image: SchoolBus, title: "School Bus", subtitle: "Student Transport", capacity: "40–45 passengers", features: ["GPS Tracking","CCTV","First Aid","Safety Belts"] },
  { id: 7, image: LuxuryCoach, title: "55 Seater Bus", subtitle: "Non AC Bus", capacity: "55 passengers", features: ["Non AC","Spacious Seating","GPS Tracking","Luggage Space"], count: "8 Buses" },
  { id: 8, image: LuxuryCoach, title: "50 Seater Bus", subtitle: "Non AC Bus", capacity: "50 passengers", features: ["Non AC","Comfortable Seating","GPS Tracking","Luggage Space"], count: "2 Buses" },
  { id: 9, image: SchoolBus, title: "40 Seater Bus", subtitle: "Non AC Bus", capacity: "40 passengers", features: ["Non AC","GPS Tracking","First Aid","Safety Belts"], count: "14 Buses" },
  { id: 10, image: MiniBus, title: "32 Seater Bus", subtitle: "Non AC Bus", capacity: "32 passengers", features: ["Non AC","Comfortable Seating","GPS Tracking","First Aid Kit"], count: "4 Buses" },
  { id: 11, image: MiniBus, title: "24 Seater Bus", subtitle: "Non AC Bus", capacity: "24 passengers", features: ["Non AC","Comfortable Seating","GPS Tracking","First Aid Kit"], count: "4 Buses" },
  { id: 12, image: TempoTraveller, title: "17 Seater Tempo", subtitle: "Non AC Tempo", capacity: "17 passengers", features: ["Non AC","Push Back Seats","Music System","Ample Luggage Space"], count: "5 Tempos" },
  { id: 13, image: SUVLargeVehicle, title: "7 Seater Cab", subtitle: "Innova Crysta", capacity: "7 passengers", features: ["AC","Spacious","Entertainment System","Charging Ports"], count: "3 AC Cabs" },
  { id: 14, image: SUVLargeVehicle, title: "6 Seater Cab", subtitle: "Ertiga", capacity: "6 passengers", features: ["AC","Spacious","Entertainment System","Charging Ports"], count: "62 AC Cabs" },
  { id: 15, image: ExcutiveSadan, title: "4 Seater Cab", subtitle: "Swift Dezire", capacity: "4 passengers", features: ["AC","Comfortable Seating","Professional Driver","GPS Tracking"], count: "12 Cabs" }
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
