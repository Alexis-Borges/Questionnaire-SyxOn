
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import StepVideo from './StepVideo.jsx';
import StepBienvenue from './StepBienvenue.jsx';
import StepIntro from './StepIntro.jsx';
import StepQ1 from './StepQ1.jsx';
import StepQ2 from './StepQ2.jsx';
import StepQ3 from './StepQ3.jsx';
import StepQ4 from './StepQ4.jsx';
import StepQ5 from './StepQ5.jsx';
import StepTransmission from './StepTransmission.jsx';
import StepContact from './StepContact.jsx';
import StepMerci from './StepMerci.jsx';
import StepEnding from './StepEnding.jsx';

export default function SyxOnExperience() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    pharmacyName: '',
    location: '',
    hasScreens: '',
    contentTypes: [],
    notes: '',
    phone: '',
    email: '',
  });

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handlePrev = () => setCurrentStep(prev => prev - 1);

  const steps = [
    <StepVideo key={0} onNext={handleNext} />,
    <StepBienvenue key={1} onNext={handleNext} />,
    <StepIntro key={2} onNext={handleNext} />,
    <StepQ1 key={3} onNext={handleNext} onPrev={handlePrev} formData={formData} setFormData={setFormData} />,
    <StepQ2 key={4} onNext={handleNext} onPrev={handlePrev} formData={formData} setFormData={setFormData} />,
    <StepQ3 key={5} onNext={handleNext} onPrev={handlePrev} formData={formData} setFormData={setFormData} />,
    <StepQ4 key={6} onNext={handleNext} onPrev={handlePrev} formData={formData} setFormData={setFormData} />,
    <StepQ5 key={7} onNext={handleNext} onPrev={handlePrev} formData={formData} setFormData={setFormData} />,
    <StepTransmission key={8} onNext={handleNext} />,
    <StepContact key={9} onNext={handleNext} onPrev={handlePrev} formData={formData} setFormData={setFormData} />,
    <StepMerci key={10} onNext={handleNext} />,
    <StepEnding key={11} />
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ width: '100%', height: '100%' }}
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}