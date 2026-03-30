import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StepMerci({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(onNext, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);
  return (
    <div
      style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        background: '#000000',
      }}
    >
      {/* Small icon at top */}
      <div style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
        <img src="/images/ICONE.png" alt="syx·on" style={{ height: 'clamp(24px, 4vw, 40px)' }} />
      </div>

      {/* "Merci." with brand gradient — centered */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          className="gradient-text"
          style={{
            fontSize: 'clamp(80px, 15vw, 200px)',
            fontWeight: 700,
          }}
        >
          Merci.
        </motion.div>
      </div>
    </div>
  );
}
