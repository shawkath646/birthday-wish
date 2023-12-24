"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Timer from '@/components/Timer'
import HappyBirthday from '@/components/HappyBirthday';
import Message from '@/components/Message';


export default function Home() {

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <main className='min-h-screen overflow-hidden'>
      <AnimatePresence>

        {currentStep === 0 && (
          <motion.div
            key={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
          >
            <Timer setCurrentStep={setCurrentStep} />
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key={1}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <HappyBirthday setCurrentStep={setCurrentStep} />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key={2}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Message setCurrentStep={setCurrentStep} />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  )
}
