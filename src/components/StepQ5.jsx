import React from 'react';
import { motion } from 'framer-motion';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const fade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } };

export default function StepQ5({ onNext, onPrev, formData, setFormData }) {
  return (
    <div className="step-container">
      <div className="step-icon">
        <img src="/images/ICONE.png" alt="syx·on" />
      </div>

      <motion.div className="step-content" variants={container} initial="hidden" animate="visible">
        <motion.div className="step-title" variants={fade}>
          5 - Remarques ou contraintes
        </motion.div>

        <motion.div variants={fade} style={{ width: 'min(90%, 500px)', marginBottom: 30 }}>
          <div className="gradient-border" style={{ borderRadius: '0px 40px 0px 40px' }}>
            <textarea
              placeholder="Charte graphique, contraintes, détails, etc."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              style={{ height: 140, borderRadius: '0px 38px 0px 38px' }}
            />
          </div>
        </motion.div>

        <motion.div className="step-nav" variants={fade}>
          <div className="gradient-border">
            <button onClick={onPrev}>Précédent</button>
          </div>
          <div className="gradient-border">
            <button onClick={onNext}>Suivant</button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
