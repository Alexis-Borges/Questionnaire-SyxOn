import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.3 } } };
const fade = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } } };

export default function StepContact({ onNext, formData, setFormData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validPhone = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/.test(formData.phone.replace(/[\s\-\.]/g, ''));
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && formData.email.length >= 5;
  const isFormValid = validPhone && validEmail;

  const handleSend = () => {
    setLoading(true);
    setError('');

    const templateParams = {
      pharmacy_name: formData.pharmacyName,
      location: formData.location,
      has_screens: formData.hasScreens,
      content_types: formData.contentTypes.join(', '),
      notes: formData.notes,
      phone: formData.phone,
      email: formData.email,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => { setLoading(false); onNext(); }, 1500);
      return;
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => { setLoading(false); onNext(); })
      .catch(() => { setLoading(false); setError('Erreur lors de l\'envoi. Veuillez réessayer.'); });
  };

  return (
    <div
      style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#000000',
      }}
    >
      <motion.div variants={container} initial="hidden" animate="visible"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >
        {/* Large icon centered */}
        <motion.img
          src="/images/ICONE.png"
          alt="syx·on"
          variants={fade}
          style={{ width: 'clamp(60px, 15vw, 120px)', marginBottom: 'clamp(20px, 5vw, 40px)' }}
        />

        {/* Inputs container */}
        <motion.div variants={fade} style={{ width: 'min(90%, 500px)', marginBottom: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ marginBottom: 8 }}>
            <div className="gradient-border" style={{ borderRadius: 'var(--r) 0px 0px 0px' }}>
              <input
                type="tel"
                placeholder="Numéro de téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ borderRadius: 'calc(var(--r) - 2px) 0px 0px 0px' }}
              />
            </div>
          </div>

          <div>
            <div className="gradient-border" style={{ borderRadius: '0px 0px var(--r) 0px' }}>
              <input
                type="email"
                placeholder="Adresse e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onKeyDown={(e) => { if (e.key === 'Enter' && isFormValid) handleSend(); }}
                style={{ borderRadius: '0px 0px calc(var(--r) - 2px) 0px' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fade}
          style={{
            fontSize: 'clamp(18px, 3.5vw, 22px)', fontWeight: 700,
            textAlign: 'center', marginBottom: 'clamp(16px, 4vw, 32px)', color: '#fff',
          }}
        >
          Et nous vous<br />recontacterons.
        </motion.div>

        {/* Error message */}
        {error && (
          <span style={{ color: '#d9534f', fontSize: 'clamp(11px, 2.5vw, 13px)', marginBottom: 8 }}>{error}</span>
        )}
      </motion.div>

      {/* Envoyer button — fixed at bottom like other steps */}
      <div className="step-nav end">
        <div className="gradient-border">
          <button
            disabled={!isFormValid || loading}
            onClick={handleSend}
          >
            {loading ? 'envoi...' : 'Envoyer'}
          </button>
        </div>
      </div>
    </div>
  );
}
