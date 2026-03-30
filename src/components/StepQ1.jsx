import React from 'react';
import { motion } from 'framer-motion';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const fade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } };

export default function StepQ1({ onNext, formData, setFormData }) {
  const valid = formData.pharmacyName.trim().length > 0;

  return (
    <div className="step-container">
      <div className="step-icon">
        <img src="/images/ICONE.png" alt="syx·on" />
      </div>

      <motion.div className="step-content" variants={container} initial="hidden" animate="visible">
        <motion.div className="step-title" variants={fade}>
          1 - Le nom de votre pharmacie.
        </motion.div>

        <motion.div variants={fade} style={{ width: 'min(90%, 500px)', marginBottom: 30 }}>
          <div className="gradient-border" style={{ borderRadius: '0px 40px 0px 40px' }}>
            <input
              type="text"
              placeholder="Nom de la pharmacie"
              value={formData.pharmacyName}
              onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
              onKeyDown={(e) => { if (e.key === 'Enter' && valid) onNext(); }}
              style={{ borderRadius: '0px 38px 0px 38px' }}
            />
          </div>
        </motion.div>

        <motion.div className="step-nav end" variants={fade}>
          <div className="gradient-border">
            <button disabled={!valid} onClick={onNext}>Suivant</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
