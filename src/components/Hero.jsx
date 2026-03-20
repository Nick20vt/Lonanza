import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="section-container" style={{ overflow: 'hidden' }}>
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '5%', left: '-5%', width: '300px', height: '300px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.5, zIndex: 0 }}
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }} 
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'var(--color-secondary)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.4, zIndex: 0 }}
      />
      
      <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', maxWidth: '800px', zIndex: 10, position: 'relative' }}>
        <motion.img 
          src="/assets/logo.png" 
          alt="Lonanza Logo" 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{ width: '220px', marginBottom: '20px', objectFit: 'contain' }} 
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: '20px', lineHeight: '1.2' }}
        >
          Morbidezza e Divertimento<br />per il tuo Gatto!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '1.3rem', marginBottom: '40px', lineHeight: '1.6', color: '#555' }}
        >
          Scopri le cucce <strong>LONANZA</strong>: un morbido rifugio, giocoso ed elegantissimo. 
          Il regalo perfetto per i sonnellini del tuo piccolo leone!
        </motion.p>
        
        <motion.button 
          className="cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 300 }}
          onClick={() => {
            document.getElementById('product-section').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Scopri la Cuccia 🐾
        </motion.button>
      </div>
    </section>
  );
}
