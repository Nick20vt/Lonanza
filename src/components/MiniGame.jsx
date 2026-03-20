import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MiniGame() {
  const [catName, setCatName] = useState('');
  const [inputName, setInputName] = useState('');
  const [catState, setCatState] = useState('awake'); // 'awake', 'eating', 'playing', 'sleeping'
  
  const [stats, setStats] = useState({
    hunger: 60,
    energy: 80,
    happiness: 60
  });

  // Game loop: stats decrease over time when awake
  useEffect(() => {
    if (!catName || catState === 'sleeping') return;

    const interval = setInterval(() => {
      setStats(prev => ({
        hunger: Math.max(0, prev.hunger - 3),
        energy: Math.max(0, prev.energy - 1),
        happiness: Math.max(0, prev.happiness - 2)
      }));
    }, 2000); // Ticks every 2 seconds

    return () => clearInterval(interval);
  }, [catName, catState]);

  // Game loop: energy replenishes VERY fast when sleeping in the Lonanza bed!
  useEffect(() => {
    let sleepInterval;
    if (catState === 'sleeping') {
      sleepInterval = setInterval(() => {
        setStats(prev => {
          const newEnergy = Math.min(100, prev.energy + 10);
          if (newEnergy === 100) {
            setCatState('awake'); // Wakes up automatically fully rested
          }
          return { ...prev, energy: newEnergy };
        });
      }, 800);
    }
    return () => clearInterval(sleepInterval);
  }, [catState]);

  const currentAvg = (stats.hunger + stats.happiness + stats.energy) / 3;
  let currentFace = '😺';
  if (currentAvg >= 80) currentFace = '😻';
  else if (currentAvg >= 20) currentFace = '😿';
  else currentFace = '🙀'; // Super triste e confuso
  
  let message = `Prenditi cura di ${catName}!`;
  if (catState === 'awake') {
    if (stats.hunger === 0) message = `${catName} sta morendo di fame! Dai la pappa!`;
    else if (stats.energy === 0) message = `${catName} sta crollando dal sonno...`;
    else if (stats.happiness === 0) message = `${catName} si sta annoiando tantissimo!`;
    else if (stats.hunger < 20) message = `${catName} ha molta fame!`;
    else if (stats.energy < 20) message = `${catName} sbadiglia, ha bisogno della sua cuccia!`;
    else if (stats.happiness < 20) message = `${catName} vuole giocare!`;
    else if (stats.hunger === 100 && stats.happiness === 100 && stats.energy === 100) message = `${catName} è il gatto perfetto! 😻`;
  } else if (catState === 'eating') {
    message = "Gnam gnam! Che bontà! 🐟";
  } else if (catState === 'playing') {
    message = "Prrr! Rincorriamo il gomitolo! 🧶";
  } else if (catState === 'sleeping') {
    message = `Zzz... La cuccia LONANZA è troppo comoda! 🛏️`;
  }

  const handleStart = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setCatName(inputName.trim());
    }
  };

  const feedCat = () => {
    if (catState === 'sleeping') return;
    setCatState('eating');
    setStats(prev => ({ ...prev, hunger: Math.min(100, prev.hunger + 30) }));
    setTimeout(() => { if (catState !== 'sleeping') setCatState('awake'); }, 2000);
  };

  const playCat = () => {
    if (catState === 'sleeping') return;
    setCatState('playing');
    setStats(prev => ({ 
      ...prev, 
      happiness: Math.min(100, prev.happiness + 30),
      energy: Math.max(0, prev.energy - 10) 
    }));
    setTimeout(() => { if (catState !== 'sleeping') setCatState('awake'); }, 2000);
  };

  const sleepCat = () => {
    setCatState('sleeping');
  };

  const wakeUpCat = () => {
    setCatState('awake');
  };

  const StatBar = ({ label, value, color }) => (
    <div style={{ marginBottom: '10px', textAlign: 'left' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '4px', fontWeight: 'bold', color: '#555' }}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div style={{ width: '100%', height: '14px', backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden', border: '1px solid #ccc' }}>
        <motion.div 
          animate={{ width: `${Math.max(0, value)}%`, backgroundColor: value < 20 ? '#e74c3c' : color }} 
          transition={{ ease: "linear", duration: 0.5 }}
          style={{ height: '100%' }} 
        />
      </div>
    </div>
  );

  return (
    <section id="minigame-section" className="section-container" style={{ backgroundColor: 'var(--color-bg)', padding: '60px 20px' }}>
      <div className="glass-panel" style={{ maxWidth: '450px', width: '100%', padding: '40px', textAlign: 'center', margin: '0 auto', border: '3px dashed rgba(255, 204, 255, 0.8)', background: '#fff' }}>
        
        {!catName ? (
          <div style={{ padding: '20px 0' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '10px' }}>Adotta un Micio 🐾</h2>
            <p style={{ color: '#666', marginBottom: '30px' }}>Prima di iniziare a giocare, dai un nome al tuo nuovo amico virtuale!</p>
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🐱</div>
            <form onSubmit={handleStart} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" 
                placeholder="Nome del gattino..." 
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                maxLength={12}
                style={{ padding: '15px', borderRadius: '10px', border: '2px solid var(--color-primary)', fontSize: '1.2rem', textAlign: 'center', outline: 'none' }} 
              />
              <motion.button 
                type="submit"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ width: '100%', background: 'linear-gradient(135deg, #ff99cc 0%, #ffccff 100%)', color: '#2c3e50' }}
                disabled={!inputName.trim()}
              >
                Inizia a Giocare!
              </motion.button>
            </form>
          </div>
        ) : (
          <div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-text)', marginBottom: '15px' }}>{catName}</h2>
            
            <div style={{ background: '#fafafa', padding: '20px', borderRadius: '15px', marginBottom: '20px', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)' }}>
              <StatBar label="Fame 🐟" value={stats.hunger} color="#f1c40f" />
              <StatBar label="Felicità 🧶" value={stats.happiness} color="#2ecc71" />
              <StatBar label="Energia ⚡" value={stats.energy} color="#3498db" />
            </div>

            {/* The Cat Area */}
            <div style={{ position: 'relative', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', background: 'var(--color-secondary)', borderRadius: '15px', overflow: 'hidden', boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.1)' }}>
              
              <AnimatePresence mode="wait">
                {catState === 'awake' && (
                  <motion.div key="awake" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, rotate: currentAvg < 80 ? [-3, 3, -3] : 0, y: currentAvg >= 80 ? [0, -5, 0] : 0 }} transition={{ repeat: Infinity, duration: currentAvg < 80 ? 0.5 : 2 }} exit={{ opacity: 0, scale: 0.8 }} style={{ fontSize: '90px', userSelect: 'none' }}>
                    {currentFace}
                  </motion.div>
                )}
                {catState === 'eating' && (
                  <motion.div key="eating" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, x: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 0.5 }} exit={{ opacity: 0, scale: 0.8 }} style={{ fontSize: '90px', userSelect: 'none' }}>
                    😽🐟
                  </motion.div>
                )}
                {catState === 'playing' && (
                  <motion.div key="playing" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 0.4 }} exit={{ opacity: 0, scale: 0.8 }} style={{ fontSize: '90px', userSelect: 'none' }}>
                    😸🧶
                  </motion.div>
                )}
                {catState === 'sleeping' && (
                  <motion.div key="sleeping" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, scaleX: [1, 1.05, 1], y: [0, 2, 0] }} transition={{ repeat: Infinity, duration: 3 }} exit={{ opacity: 0, scale: 0.8 }} style={{ fontSize: '90px', userSelect: 'none', position: 'relative' }}>
                    😴
                    <div style={{ position: 'absolute', bottom: '-40px', left: '-50%', right: '-50%', fontSize: '100px', zIndex: -1 }}>
                      🛏️
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--color-accent)', minHeight: '40px', marginBottom: '20px', lineHeight: '1.2' }}>{message}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {catState === 'sleeping' ? (
                <motion.button className="cta-button" onClick={wakeUpCat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: '#fff', color: '#2c3e50', border: '2px solid var(--color-primary)', gridColumn: '1 / -1', padding: '12px', boxShadow: 'none' }}>
                  ☀️ Sveglia {catName} (Energia al {stats.energy}%)
                </motion.button>
              ) : (
                <>
                  <motion.button className="cta-button" onClick={feedCat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: '#f1c40f', color: '#fff', padding: '10px', fontSize: '0.9rem', boxShadow: 'none', borderRadius: '10px' }}>
                    Da' la pappa 🐟
                  </motion.button>
                  <motion.button className="cta-button" onClick={playCat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: '#e74c3c', color: '#fff', padding: '10px', fontSize: '0.9rem', boxShadow: 'none', borderRadius: '10px' }}>
                    Fallo Giocare 🧶
                  </motion.button>
                  <motion.button className="cta-button" onClick={sleepCat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ background: 'var(--color-primary)', color: '#2c3e50', padding: '12px', fontSize: '1.1rem', gridColumn: '1 / -1', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', borderRadius: '15px', fontWeight: 'bold' }}>
                    Nanna nella Cuccia 🛏️
                  </motion.button>
                </>
              )}
            </div>
            
            {/* Small fun tip about the bed -> connects with the theme */}
            <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '20px' }}>
              <em>💡 Lo sapevi? Farlo dormire nella comodissima cuccia rigenera l'Energia molto più velocemente!</em>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
