// import React from "react";
// import Navbar from "../../components/Navbar/Navbar.jsx";
// import Footer from "../../components/Footer/Footer.jsx";
// import Safety from "../../assets/Safety.png";
// import Reliability from "../../assets/Reliability.png";
// import CustomerFocus from "../../assets/CustomerFocus.png";
// import ProfessionalExcl from "../../assets/ProfessionalExcl.png";
// import Founder from "../../assets/Founder.png";

// const values = [
//   {
//     id: 1,
//     icon: Safety,
//     title: "Safety First",
//     desc: "Passenger safety is at the heart of everything we do — from vehicle maintenance to driver training.",
//   },
//   {
//     id: 2,
//     icon: Reliability,
//     title: "Reliability",
//     desc: "We ensure punctual service and dependable vehicles for a worry-free experience every time.",
//   },
//   {
//     id: 3,
//     icon: CustomerFocus,
//     title: "Customer Focus",
//     desc: "Our services are built around your needs — ensuring satisfaction through flexibility and responsiveness.",
//   },
//   {
//     id: 4,
//     icon: ProfessionalExcl,
//     title: "Professional Excellence",
//     desc: "Experienced drivers and a professional management team ensure smooth, quality service delivery.",
//   },
// ];

// const About = () => {
//   return (
//     <>
//       <Navbar />

//       {/* === HERO SECTION === */}
//       <section className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white py-24 text-center relative overflow-hidden">
//         <div className="max-w-5xl mx-auto px-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//             About Jaithra Enterprises
//           </h1>
//           <p className="text-lg text-blue-100">
//             Your trusted partner for reliable travel solutions
//           </p>
//         </div>
//       </section>

//       {/* === MISSION SECTION === */}
//       <section className="py-20 bg-white">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Mission</h2>
//           <p className="text-slate-600 leading-relaxed text-lg">
//             At <strong>Jaithra Enterprises</strong>, we are committed to providing
//             exceptional transport services that prioritize safety, reliability,
//             and customer satisfaction. With years of experience in the industry,
//             we have built a reputation for delivering professional travel
//             solutions for schools, corporate clients, and families across the
//             region.
//           </p>
//           <p className="text-slate-600 leading-relaxed text-lg mt-6">
//             Our mission is to make every journey comfortable, safe, and
//             stress-free. Whether it’s a school excursion, corporate event, or
//             family celebration, we ensure that your transportation needs are
//             handled with professionalism and care.
//           </p>
//         </div>
//       </section>

//       {/* === VISION SECTION === */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Vision</h2>
//           <p className="text-slate-600 leading-relaxed text-lg">
//             To become the leading travel and transport solutions provider known
//             for reliability, innovation, and customer-centric service. We aim to
//             redefine travel standards by continuously improving our fleet,
//             adopting modern technology, and upholding strong ethical values.
//           </p>
//         </div>
//       </section>

//       {/* === CORE VALUES === */}
//       <section className="py-20 bg-white">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
//             Our Core Values
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//             {values.map((v) => (
//               <div
//                 key={v.id}
//                 className="bg-slate-50 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-8 text-center"
//               >
//                 <div className="flex justify-center mb-5">
//                   <img
//                     src={v.icon}
//                     alt={v.title}
//                     className="w-16 h-16 object-contain"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900 mb-3">
//                   {v.title}
//                 </h3>
//                 <p className="text-slate-600 text-sm leading-relaxed">
//                   {v.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* === FOUNDER SECTION === */}
//       <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
//         <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
//           <div className="md:w-1/3 flex justify-center">
//             <img
//               src={Founder}
//               alt="Founder"
//               className="rounded-2xl shadow-lg w-56 h-56 object-cover border-4 border-white"
//             />
//           </div>

//           <div className="md:w-2/3">
//             <h2 className="text-3xl font-bold text-blue-800 mb-4">
//               Message from Our Founder
//             </h2>
//             <p className="text-slate-600 leading-relaxed text-lg">
//               “At Jaithra Enterprises, our goal is not just to transport people
//               — but to deliver peace of mind. Every trip we make reflects our
//               commitment to excellence, safety, and customer satisfaction.”
//             </p>
//             <p className="text-blue-700 font-semibold mt-6">
//               — Founder, Jaithra Enterprises
//             </p>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default About;
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AboutHero from "../../components/About/AboutHero.jsx";
import Mission from "../../components/About/Mission.jsx";
import CoreValues from "../../components/About/CoreValues.jsx";
import FounderSection from "../../components/About/Founder.jsx";
import FleetGrid from "../../components/Fleet/FleetGrid.jsx";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Mission />
      <CoreValues />
      <FounderSection />

      {/* === Our Fleet Section === */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Fleet</h2>
          <p className="text-slate-600 mb-10">
            Well-maintained vehicles to suit every need — modern, safe, and reliable.
          </p>
        </div>
        <FleetGrid />
      </section>

      <Footer />
    </>
  );
};

export default About;
