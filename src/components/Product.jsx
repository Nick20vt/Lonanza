import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle } from 'lucide-react';

export default function Product() {
  const amazonLink = "https://www.amazon.it/Cuccia-Morbida-Doppio-Stagioni-Inverno/dp/B0F7LNF6CM/";

  return (
    <section id="product-section" className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', zIndex: 0 }}
      />
      
      <div style={{ maxWidth: '1200px', width: '100%', zIndex: 10, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
        {/* Left side: Product Image / 3D feel */}
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ rotateY: 10, rotateX: 5, scale: 1.02 }}
          style={{ flex: '1 1 400px', padding: '20px', perspective: '1000px', cursor: 'grab' }}
        >
          <div style={{ width: '100%', height: '400px', background: 'var(--color-bg)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.05)' }}>
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             >
                <div style={{ fontSize: '150px' }}>😻🛌</div>
             </motion.div>
          </div>
        </motion.div>

        {/* Right side: Product details */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 400px' }}
        >
          <span style={{ color: 'var(--color-accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Il Nostro Bestseller</span>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-text)', marginTop: '10px', marginBottom: '20px' }}>Cuccia Nuvola LONANZA</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px', lineHeight: '1.6' }}>
            Regala al tuo gatto l'esperienza di sonno definitiva. La nostra cuccia è progettata per alleviare lo stress e offrire un supporto perfetto per i riposini di tutti i giorni.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
            {['Pelo ultramorbido anti-stress', 'Lavabile in lavatrice a 30°C', 'Fondo antiscivolo', 'Colori pastello che si abbinano a casa tua'].map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', fontSize: '1.1rem', color: '#444' }}>
                <CheckCircle size={24} color="var(--color-secondary)" style={{ marginRight: '15px', flexShrink: 0 }} />
                {feature}
              </li>
            ))}
          </ul>

          <motion.a 
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <ShoppingCart size={24} />
            Acquista Cuccia su Amazon
          </motion.a>

          <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.7)', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--color-text)' }}>Esplora Tutto il Mondo LONANZA!</h3>
            <p style={{ color: '#555', fontSize: '1rem', marginBottom: '15px' }}>
              Questo è solo uno dei nostri classici! Nel nostro negozio Amazon trovi tante altre sorprese per i tuoi mici, comprese edizioni speciali, giochi interattivi e <strong>prodotti stagionali</strong> bellissimi.
            </p>
            <a 
              href="https://www.amazon.it/s?me=AN4DRCVREJBSG&marketplaceID=APJ6JRA9NG5V4" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-accent)', fontWeight: 'bold', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              Guarda tutti gli altri prodotti LONANZA &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
