import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Link from react-router-dom

// BrandCard Component
const BrandCard = React.memo(({ brand, onHover }) => (
  <motion.div
    className="flex-shrink-0 w-auto rounded-3xl overflow-hidden flex flex-col items-start justify-center p-6 bg-transparent"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <Link to={brand.link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center space-x-2">
        {typeof brand.logo === "string" ? (
          <img
            src={brand.logo}
            alt={brand.name}
            width={50}
            height={50}
            className="text-3xl text-white"
          />
        ) : typeof brand.logo === "function" ? (
          React.createElement(brand.logo, { className: "text-3xl text-white" })
        ) : (
          React.cloneElement(brand.logo, { className: "text-3xl text-white" })
        )}
        <h3 className="text-lg font-semibold text-white">{brand.name}</h3>
      </div>
    </Link>
  </motion.div>
));

BrandCard.displayName = "BrandCard";

// Custom Hook for Media Queries
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

// BrandSection Component
const BrandSection = ({ brands, scrollSpeed = 0.1, scrollInterval = 30 }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const effectiveScrollSpeed = isMobile ? scrollSpeed * 2 : scrollSpeed;
  const effectiveScrollInterval = isMobile ? scrollInterval / 2 : scrollInterval;

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setScrollPosition((prevPosition) => (prevPosition + effectiveScrollSpeed) % 100);
      }, effectiveScrollInterval);
    }

    return () => clearInterval(interval);
  }, [isPaused, effectiveScrollSpeed, effectiveScrollInterval]);

  const handleHover = (isHovered) => {
    setIsPaused(isHovered);
  };

  return (
    <section className="py-16 relative">
      <div className="relative max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          <AnimatePresence>
            <motion.div
              className="flex space-x-5"
              style={{ transform: `translateX(-${scrollPosition}%)` }}
              transition={{ duration: 0.5 }}
            >
              {/* Duplicate the brands array to create infinite scrolling */}
              {brands.concat(brands).map((brand, index) => (
                <BrandCard key={index} brand={brand} onHover={handleHover} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
