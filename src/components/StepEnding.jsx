import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function StepEnding() {
  const [showMessage, setShowMessage] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setTimeout(() => setShowMessage(true), 1000);
  };

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#000000',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      {/* Video */}
      <motion.video
        ref={videoRef}
        src="/videos/syx on - ending.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        animate={{ opacity: showMessage ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ width: 'min(90vw, 50vw)', height: 'auto', maxHeight: '70vh', objectFit: 'contain', position: 'absolute' }}
      />

      {/* Closing message */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            textAlign: 'center',
            color: '#fff',
            zIndex: 10,
          }}
        >
          <motion.div style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 700, marginBottom: 20 }}>
            Nous avons vos informations.
          </motion.div>
          <motion.div style={{ fontSize: 'clamp(16px, 2.5vw, 28px)', color: '#dde2ee' }}>
            Merci de fermer cette page.
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
