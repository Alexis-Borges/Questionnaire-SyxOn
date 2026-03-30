import React from 'react';
import { motion } from 'framer-motion';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const fade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } };

const options = [
  { label: 'Oui', radius: '40px 0px 0px 0px' },
  { label: 'Non', radius: '0px 0px 40px 0px' },
];

export default function StepQ3({ onNext, onPrev, formData, setFormData }) {
  const valid = formData.hasScreens !== '';

  return (
    <div className="step-container">
      <div className="step-icon">
        <img src="/images/ICONE.png" alt="syx·on" />
      </div>

      <motion.div className="step-content" variants={container} initial="hidden" animate="visible">
        <motion.div className="step-title" variants={fade}>
          3 - Avez-vous déjà des écrans ?
        </motion.div>

        <motion.div variants={fade} style={{
          display: 'flex', gap: 'clamp(4px, 1vw, 8px)', marginBottom: 30,
          flexWrap: 'wrap', justifyContent: 'center',
          width: 'min(95%, 500px)',
        }}>
          {options.map((opt) => (
            <div key={opt.label} className="gradient-border" style={{ borderRadius: opt.radius }}>
              <button
                className={`choice-chip ${formData.hasScreens === opt.label ? 'selected' : ''}`}
                style={{ borderRadius: opt.radius }}
                onClick={() => setFormData({ ...formData, hasScreens: opt.label })}
              >
                {opt.label}
              </button>
            </div>
          ))}
        </motion.div>

        <motion.div className="step-nav" variants={fade}>
          <div className="gradient-border">
            <button onClick={onPrev}>Précédent</button>
          </div>
          <div className="gradient-border">
            <button disabled={!valid} onClick={onNext}>Suivant</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
