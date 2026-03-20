import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about-section" className="section-container" style={{ backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1000px', width: '100%', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <img src="/assets/logo.png" alt="Lonanza" style={{ height: '100px', marginBottom: '20px', objectFit: 'contain' }} />
          <h2 style={{ fontSize: '3rem', color: 'var(--color-text)', marginBottom: '20px' }}>Chi Siamo</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            <strong>LONANZA</strong> è il nostro piccolo grande sogno di famiglia: siamo marito e moglie e abbiamo trasformato la passione in un lavoro! Selezioniamo in modo scrupoloso le materie prime per garantire sempre il <strong>miglior rapporto qualità-prezzo</strong> dai produttori più affidabili, aggiungendo sempre il nostro tocco personale per assicurarci che il prodotto sia perfetto per i tuoi piccoli felini.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { icon: <Heart size={40} color="var(--color-accent)" />, title: 'Amore Felino', desc: 'Selezioniamo i nostri prodotti curando ogni dettaglio e pensando esclusivamente al puro comfort dei vostri simpatici amici.' },
            { icon: <Star size={40} color="#f1c40f" />, title: 'Tocchi Personalizzati', desc: 'I nostri articoli propongono idee uniche col nostro tocco distintivo per abbinarli perfettamente allo stile della tua famiglia.' },
            { icon: <Shield size={40} color="var(--color-secondary)" />, title: 'Materiali Scelti', desc: 'Lavoriamo con una solida rete di partner per selezionare materie prime morbide e resistenti con il miglior rapporto qualità-prezzo.' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              style={{ padding: '40px', textAlign: 'center', background: '#fafafa', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ background: '#fff', padding: '15px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  {item.icon}
                </div>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ color: '#555', lineHeight: '1.5' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
