import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import DigitalDigit from 'digital-digit'; // Import your DigitalDigit component


interface TimerProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ setCurrentStep }) => {

  const [time, setTime] = useState(0);
  const [unlockValue, setunlockValue] = useState('');

  const unlockCode = 'AABBCC';

  useEffect(() => {
    const calculateTimeUntilNextChristmas = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const christmas = new Date(`December 25, ${currentYear} 00:00:00 GMT+0600`); // Set to Dhaka time

      // Check if today is 25th or 26th December
      if ((now.getMonth() === 11 && now.getDate() === 25) || (now.getMonth() === 11 && now.getDate() === 26)) {
        setTimeout(() => {
          setCurrentStep(1);
          return () => clearInterval(timer);
        }, 1000);
      }

      // Check if it's already past Christmas
      if (now > christmas) {
        const nextChristmas = new Date(`December 25, ${currentYear + 1} 00:00:00 GMT+0600`);
        const timeDifference = nextChristmas.getTime() - now.getTime();
        setTime(timeDifference);
      } else {
        const timeDifference = christmas.getTime() - now.getTime();
        setTime(timeDifference);
      }
    };

    const timer = setInterval(calculateTimeUntilNextChristmas, 1000);
    calculateTimeUntilNextChristmas(); // Initial calculation

    return () => clearInterval(timer);
  }, []);



  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  // Function to ensure digit value is between 0 and 9
  const checkNum = (num: number): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 => {
    return Math.max(0, Math.min(9, num)) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  };
  

  return (
    <section className='bg-black text-white container mx-auto flex h-full items-center justify-center relative -mt-10'>
      <Head>
        <title>Please wait 🥺</title>
      </Head>
      <div className='flex space-x-3'>
        <div>
            <div className='h-10 lg:h-32 flex items-center space-x-2'>
                <DigitalDigit digit={checkNum(Math.floor(days / 100))} color="white" opacitySegment={0} />
                <DigitalDigit digit={checkNum(Math.floor((days % 100) / 10))} color="white" opacitySegment={0} />
                <DigitalDigit digit={checkNum(days % 10)} color="white" opacitySegment={0} />
            </div>
            <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Days</p>
        </div>

        <span className='text-[40pt] lg:text-[90pt] font-extrabold -mt-5'>:</span>

        <div>
            <div className='h-10 lg:h-32 flex items-center space-x-2'>
                <DigitalDigit digit={checkNum(Math.floor(hours / 10))} color="white" opacitySegment={0} />
                <DigitalDigit digit={checkNum(hours % 10)} color="white" opacitySegment={0} />
            </div>
            <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Hours</p>
        </div>

        <span className='text-[40pt] lg:text-[90pt] font-extrabold -mt-5'>:</span>

        <div>
            <div className='h-10 lg:h-32 flex items-center space-x-2'>
                <DigitalDigit digit={checkNum(Math.floor(minutes / 10))} color="white" opacitySegment={0} />
                <DigitalDigit digit={checkNum(minutes % 10)} color="white" opacitySegment={0} />
            </div>
            <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Minutes</p>
        </div>

        <span className='text-[40pt] lg:text-[90pt] font-extrabold -mt-5'>:</span>

        <div>
            <div className='h-10 lg:h-32 flex items-center space-x-2'>
                <DigitalDigit digit={checkNum(Math.floor(seconds / 10))} color="white" opacitySegment={0} />
                <DigitalDigit digit={checkNum(seconds % 10)} color="white" opacitySegment={0} />
            </div>
            <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Seconds</p>
        </div>
      </div>

      <div className='absolute bottom-10'>
        <div className='flex items-center'>
            <input value={unlockValue} onChange={e => setunlockValue(e.target.value)} placeholder='Enter unlock code to skip the timer' className='outline-none px-2 py-1.5 rounded-sm bg-gray-800 w-72' />
            <button type='button' disabled={unlockValue !== unlockCode} onClick={() => setCurrentStep(1)} className='py-1.5 px-4 bg-pink-600 rounded outline-none hover:bg-pink-700 disabled:bg-gray-400 transition-all'>Unlock</button>
        </div>
      </div>
    </section>
  );
};

export default Timer;

