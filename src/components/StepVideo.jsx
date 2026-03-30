import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function StepVideo({ onNext }) {
  const [fading, setFading] = useState(false);
  const videoRef = useRef(null);
  const hasEnded = useRef(false);

  const proceed = () => {
    if (hasEnded.current) return;
    hasEnded.current = true;
    setFading(true);
    setTimeout(onNext, 800);
  };

  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!hasEnded.current) proceed();
    }, 5000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#000000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 'clamp(16px, 4vw, 0px)',
    }}>
      <motion.video
        ref={videoRef}
        src="/videos/syx on - opening.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => setTimeout(proceed, 300)}
        onCanPlay={() => {}}
        onError={proceed}
        animate={{ opacity: fading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          width: 'min(90vw, 50vw)',
          height: 'auto',
          maxHeight: '70vh',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}
