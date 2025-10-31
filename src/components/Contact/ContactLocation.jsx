import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

// Exact location (extracted from the provided short URL)
const LAT = 17.7479782;
const LNG = 83.1980264;
const ZOOM = 17; // adjust for closer/further view (higher = closer)

// Google Maps links
const GOOGLE_MAPS_PLACE_LINK = `https://www.google.com/maps?q=${LAT},${LNG}`;
const EMBED_SRC = `https://www.google.com/maps?q=Jaitra+Enterprises,+D.No+8-6/2,+Sriramnagar-2,+Gopalapatnam,+Visakhapatnam,+Andhra+Pradesh+531173&z=${ZOOM}&output=embed`;

export default function ContactLocation() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6"
      >
        Our Location
      </motion.h2>

      <motion.div
        whileHover={{ translateY: -4 }}
        className="max-w-6xl mx-auto bg-gradient-to-r from-white/70 to-blue-50/60 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-stretch gap-6"
      >
        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center text-slate-700 p-6">
          <FaMapMarkerAlt className="text-pink-500 text-5xl mb-4" />
          <p className="text-lg font-medium">Jaitra Enterprises</p>
          <p className="text-sm text-slate-500 mt-2 text-center">
            D.No: 8-6/2, Sriramnagar-2,<br />
            Gopalapatnam, Visakhapatnam,<br />
            Andhra Pradesh 531173
          </p>

          <a
            href={GOOGLE_MAPS_PLACE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-transparent text-sm font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 bg-white"
            aria-label="Open location in Google Maps"
          >
            Open in Google Maps <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        <div className="w-full sm:w-2/3 rounded-xl overflow-hidden bg-slate-100/40 relative">
          {/* Responsive aspect ratio box */}
          <div className="w-full aspect-[16/10] sm:aspect-[16/9] relative">
            {!loaded && !error && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                <div className="animate-pulse text-center p-4">
                  <div className="h-3 w-40 bg-slate-200 rounded mb-3 mx-auto" />
                  <div className="h-3 w-28 bg-slate-200 rounded mx-auto" />
                </div>
              </div>
            )}

            {error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white">
                <p className="text-sm text-slate-600 mb-3">
                  Map couldn't load — you can still open the location in Google Maps.
                </p>
                <a
                  href={GOOGLE_MAPS_PLACE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium"
                >
                  Open Google Maps
                </a>
              </div>
            )}

            {/* Iframe: lazy loading, centers on exact coordinates and drops a pin */}
            <iframe
              title="Jaitra Enterprises, Visakhapatnam - map"
              src={EMBED_SRC}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              className={`absolute inset-0 w-full h-full border-0 ${
                loaded ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
              allowFullScreen
              aria-hidden={loaded ? "false" : "true"}
            />
          </div>

          <div className="p-4 border-t border-slate-100 text-left bg-white/60">
            <p className="text-xs text-slate-500">
              Tip: pinch to zoom on mobile, click & drag to pan. Use the button to open in the full Google Maps app for directions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
