import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CatIcon = ({ color, secondaryColor }) => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body / Head form */}
    <circle cx="50" cy="55" r="40" fill={color} />
    {secondaryColor && (
      <path d="M20 35 Q50 80 80 35 Z" fill={secondaryColor} />
    )}
    <path d="M20 50 L5 10 L45 35" fill={color} />
    <path d="M80 50 L95 10 L55 35" fill={color} />
    {/* Eyes */}
    <circle cx="35" cy="50" r="6" fill="#fff" />
    <circle cx="65" cy="50" r="6" fill="#fff" />
    <circle cx="35" cy="50" r="2.5" fill="#000" />
    <circle cx="65" cy="50" r="2.5" fill="#000" />
    {/* Nose and Mouth */}
    <path d="M47 62 L53 62 L50 67 Z" fill="#ff99cc" />
    <path d="M50 67 Q45 74 40 70 M50 67 Q55 74 60 70" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function KittenCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Black Cat: stays closer, slightly faster
  const blackX = useSpring(mouseX, { damping: 20, stiffness: 120, mass: 0.5 });
  const blackY = useSpring(mouseY, { damping: 20, stiffness: 120, mass: 0.5 });

  // Grey/White Cat: lags behind the black cat
  const greyX = useSpring(mouseX, { damping: 25, stiffness: 80, mass: 0.8 });
  const greyY = useSpring(mouseY, { damping: 25, stiffness: 80, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset so the cursors don't block the actual pointer
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: greyX,
          y: greyY,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      >
        {/* Grey with white pattern */}
        <CatIcon color="#a0acbd" secondaryColor="#ffffff" />
      </motion.div>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: blackX,
          y: blackY,
          pointerEvents: 'none',
          zIndex: 9999,
          marginLeft: '40px', // Offset relative to the first cat
          marginTop: '20px',
        }}
      >
        {/* Full Black Cat */}
        <CatIcon color="#2c3e50" />
      </motion.div>
    </>
  );
}
