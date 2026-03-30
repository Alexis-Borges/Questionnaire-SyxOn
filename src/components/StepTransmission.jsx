import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StepTransmission({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(onNext, 4000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div
      style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#000000',
      }}
    >
      {/* Icon — opacity pulse: 0% → 100% twice */}
      <motion.img
        src="/images/ICONE.png"
        alt="syx·on"
        style={{ width: 'clamp(60px, 15vw, 120px)', marginBottom: 'clamp(20px, 5vw, 40px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1] }}
        transition={{ duration: 3, times: [0, 0.3, 0.6, 1], ease: 'easeInOut' }}
      />

      {/* Text — fades in then out */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.5, times: [0, 0.2, 0.6, 1], ease: 'easeInOut' }}
        style={{
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          color: '#dde2ee',
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        Nous transmettons<br />votre demande.
      </motion.div>
    </div>
  );
}
