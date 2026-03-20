import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact-section" className="section-container" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <motion.div 
        className="glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: '60px', textAlign: 'center', maxWidth: '600px', width: '100%', background: 'rgba(255, 255, 255, 0.85)' }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-text)' }}>Fai le fusa con noi!</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '40px', color: '#555' }}>
          Hai domande sulla tua nuova cuccia? Vuoi mandarci la foto del tuo gatto felice? Scrivici!
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input 
            type="text" 
            placeholder="Il tuo nome (e quello del tuo gatto)" 
            style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'inherit', outline: 'none' }} 
          />
          <input 
            type="email" 
            placeholder="La tua email" 
            style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'inherit', outline: 'none' }} 
          />
          <textarea 
            placeholder="Il tuo miao-ssaggio..." 
            rows="5"
            style={{ padding: '15px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical', outline: 'none' }} 
          />
          <motion.button 
            type="button"
            className="cta-button" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '10px', display: 'block', width: '100%' }}
            onClick={(e) => { e.preventDefault(); alert("Miao! Messaggio inviato con successo. 🐾"); }}
          >
            Invia Messaggio
          </motion.button>
        </form>
      </motion.div>
      
      <footer style={{ marginTop: '60px', textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
        <p>© 2026 LONANZA. Tutti i diritti riservati ai felini morbidi.</p>
      </footer>
    </section>
  );
}
