"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Timer from '@/components/Timer'
import HappyBirthday from '@/components/HappyBirthday';
import Message from '@/components/Message';
import GoodBye from '@/components/GoodBye';



export default function Home() {

  const [currentStep, setCurrentStep] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);


  return (
    <main className='overflow-hidden relative min-h-screen'>

      <button onClick={() => setSoundEnabled(prev => !prev)} className='absolute right-5 top-5 bg-pink-500 p-3 rounded-full z-[99]'>{soundEnabled ? "Mute" : "Unmute"}</button>

      <AnimatePresence>

        {currentStep === 0 && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            className='h-full'
          >
            <Timer soundEnabled={soundEnabled} setCurrentStep={setCurrentStep} />
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            className='h-full'
          >
            <HappyBirthday soundEnabled={soundEnabled} setCurrentStep={setCurrentStep} />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            className='h-full'
          >
            <Message setCurrentStep={setCurrentStep} />
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            className='h-full'
          >
            <GoodBye />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  )
}
