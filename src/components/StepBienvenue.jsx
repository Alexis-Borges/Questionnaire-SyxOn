import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StepBienvenue({ onNext }) {
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
        cursor: 'pointer',
      }}
      onClick={onNext}
    >
      <div style={{ paddingTop: 'clamp(20px, 4vw, 40px)' }}>
        <img src="/images/ICONE.png" alt="syx·on" style={{ height: 'clamp(24px, 4vw, 40px)' }} />
      </div>

      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingBottom: 'clamp(4vh, 8vh, 12vh)', padding: '0 clamp(16px, 4vw, 40px)',
      }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 'clamp(8px, 2vw, 12px)', flexWrap: 'wrap',
          }}
        >
          <span
            className="gradient-text-animated"
            style={{ fontSize: 'clamp(22px, 4vw, 48px)', fontWeight: 700 }}
          >
            Bienvenue chez
          </span>
          <img
            src="/images/SIGNATURE.png"
            alt="syx·on"
            style={{
              height: 'clamp(18px, 3.5vw, 40px)',
              opacity: 0.9,
              display: 'block',
              transform: 'translateY(clamp(4px, 0.8vw, 8px))',
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
