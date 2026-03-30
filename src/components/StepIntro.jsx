import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StepIntro({ onNext }) {
  useEffect(() => {
    const timer = setTimeout(onNext, 11000);
    return () => clearTimeout(timer);
  }, [onNext]);

  const fadeDuration = 0.8;
  const line1 = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0, duration: fadeDuration, ease: 'easeInOut' } } };
  const word1 = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 3, duration: fadeDuration, ease: 'easeInOut' } } };
  const word2 = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 4.5, duration: fadeDuration, ease: 'easeInOut' } } };
  const word3 = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 6, duration: fadeDuration, ease: 'easeInOut' } } };
  const line3 = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 7.5, duration: fadeDuration, ease: 'easeInOut' } } };

  return (
    <div
      style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        background: '#000000', cursor: 'pointer',
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
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center' }}
        >
          <motion.div variants={line1} style={{ fontSize: 'clamp(20px, 4.5vw, 50px)', color: '#fff', marginBottom: 'clamp(8px, 2vw, 16px)' }}>
            Vous avez un message,
          </motion.div>

          <div style={{ fontSize: 'clamp(20px, 4.5vw, 50px)', color: '#fff', marginBottom: 'clamp(8px, 2vw, 24px)' }}>
            <motion.span variants={word1}>Nous avons l'écran, </motion.span>
            <motion.span variants={word2}>la précision, </motion.span>
            <motion.span variants={word3}>et le mouvement.</motion.span>
          </div>

          <motion.div
            variants={line3}
            style={{
              fontSize: 'clamp(20px, 4.5vw, 50px)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 'clamp(6px, 1.5vw, 10px)', flexWrap: 'wrap',
            }}
          >
            <img
              src="/images/SIGNATURE.png"
              alt="syx·on"
              style={{
                height: 'clamp(18px, 4vw, 44px)',
                opacity: 0.9,
                display: 'block',
                transform: 'translateY(clamp(4px, 0.8vw, 10px))',
              }}
            />
            <span>fera le reste.</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
