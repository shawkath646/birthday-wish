import React, { useState, useEffect } from 'react';
import DigitalDigit from 'digital-digit';

interface TimerProps {
  soundEnabled: boolean;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ soundEnabled, setCurrentStep }) => {

  const [time, setTime] = useState(0);

  useEffect(() => {
    const calculateTimeUntilNextChristmas = () => {

      const dateOfBirth = process.env.NEXT_PUBLIC_DATE_OF_BIRTH || "2001-01-01";

      const now = new Date();
      const currentYear = now.getFullYear();
      const dob = new Date(dateOfBirth);
      const christmas = new Date(`${currentYear}-${dob.getMonth() + 1}-${dob.getDate()}`);

      if (now.getMonth() === dob.getMonth() && now.getDate() === dob.getDate()) {
        setTimeout(() => {
          setCurrentStep(1);
          return () => clearInterval(timer);
        }, 1000);
      }

      if (now > christmas) {
        const nextChristmas = new Date(`${currentYear + 1}-${dob.getMonth() + 1}-${dob.getDate()}`);
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

  useEffect(() => {
    let alarmAudio: HTMLAudioElement | null = null;
    let tickingAudio: HTMLAudioElement | null = null;

    if (soundEnabled) {
      if (time === 0) {
        if (tickingAudio) {
          (tickingAudio as HTMLAudioElement).pause();
          (tickingAudio as HTMLAudioElement).currentTime = 0;
        }
        alarmAudio = new Audio('/Alarm-Fast-High-Pitch-A1-www.fesliyanstudios.com.mp3');
        alarmAudio.loop = true;
        alarmAudio.play().catch(error => {
          console.error('Alarm audio play error:', error);
        });
      } else {
        if (alarmAudio) {
          (alarmAudio as HTMLAudioElement).pause();
          (alarmAudio as HTMLAudioElement).currentTime = 0;
        }
        tickingAudio = new Audio('/Clock-Ticking-C-www.fesliyanstudios.com.mp3');
        tickingAudio.loop = true;
        tickingAudio.play().catch(error => {
          console.error('Ticking audio play error:', error);
        });
      }
    }

    return () => {
      if (alarmAudio) {
        (alarmAudio as HTMLAudioElement).pause();
        (alarmAudio as HTMLAudioElement).currentTime = 0;
      }
      if (tickingAudio) {
        (tickingAudio as HTMLAudioElement).pause();
        (tickingAudio as HTMLAudioElement).currentTime = 0;
      }
    };
  }, [soundEnabled, time]);


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
    <section className='bg-black text-white container mx-auto flex h-full items-center justify-center relative min-h-screen'>
      <div className='md:flex space-y-5 md:space-y-0 md:space-x-3'>
        <div>
          <div className='h-8 md:h-10 lg:h-32 flex items-center space-x-2 justify-center'>
            <DigitalDigit digit={checkNum(Math.floor(days / 100))} color="white" opacitySegment={0} />
            <DigitalDigit digit={checkNum(Math.floor((days % 100) / 10))} color="white" opacitySegment={0} />
            <DigitalDigit digit={checkNum(days % 10)} color="white" opacitySegment={0} />
          </div>
          <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Days</p>
        </div>

        <div>
          <span className='hidden md:block text-[40pt] lg:text-[90pt] font-extrabold -mt-5'>:</span>
        </div>

        <div>
          <div className='h-8 md:h-10 lg:h-32 flex items-center space-x-2 justify-center'>
            <DigitalDigit digit={checkNum(Math.floor(hours / 10))} color="white" opacitySegment={0} />
            <DigitalDigit digit={checkNum(hours % 10)} color="white" opacitySegment={0} />
          </div>
          <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Hours</p>
        </div>

        <div>
          <span className='hidden md:block text-[40pt] lg:text-[90pt] font-extrabold -mt-5'>:</span>
        </div>

        <div>
          <div className='h-8 md:h-10 lg:h-32 flex items-center space-x-2 justify-center'>
            <DigitalDigit digit={checkNum(Math.floor(minutes / 10))} color="white" opacitySegment={0} />
            <DigitalDigit digit={checkNum(minutes % 10)} color="white" opacitySegment={0} />
          </div>
          <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Minutes</p>
        </div>

        <div>
          <span className='hidden md:block text-[40pt] lg:text-[90pt] font-extrabold -mt-5'>:</span>
        </div>

        <div>
          <div className='h-8 md:h-10 lg:h-32 flex items-center space-x-2 justify-center'>
            <DigitalDigit digit={checkNum(Math.floor(seconds / 10))} color="white" opacitySegment={0} />
            <DigitalDigit digit={checkNum(seconds % 10)} color="white" opacitySegment={0} />
          </div>
          <p className='mt-5 text-center font-bold lg:text-xl uppercase'>Seconds</p>
        </div>
      </div>

      <div className='absolute bottom-10'>
        <button type='button' onClick={() => setCurrentStep(1)} className='block max-w-[200px]  mx-auto py-1.5 px-4 bg-pink-600 rounded outline-none hover:bg-pink-700 disabled:bg-gray-400 transition-all'>Skip Timer</button>
      </div>
    </section>
  );
};

export default Timer;

