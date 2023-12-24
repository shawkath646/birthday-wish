import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti'
import useWindowSize from '@/app/lib/useWindowSize';
import Head from 'next/head';

interface HappyBirthdayProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const HappyBirthday: React.FC<HappyBirthdayProps> = ({ setCurrentStep }) => {
  const generateContent = (count: number, text: string): string[] => {
    return Array.from({ length: count }, () => `• ${text}`);
  };

  const content1 = generateContent(60, 'HAPPY BIRTHDAY');
  const content2 = generateContent(60, 'SANJIDA JAHAN MRIDULA');
  const content3 = generateContent(60, 'MANY MANY RETURNS OF THE DAY');

  const [indexes, setIndexes] = useState<number[]>([0, 0, 0]);

  const { height, width } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      const index1 = Math.floor(Math.random() * (content1.length - 20)) + 10;
      const index2 = Math.floor(Math.random() * (content2.length - 20)) + 10;
      const index3 = Math.floor(Math.random() * (content3.length - 20)) + 10;
      
      setIndexes([index1, index2, index3]);
    }, 1000);

    return () => clearInterval(interval);
  }, [content1.length, content2.length, content3.length]);

  return (
    <section className='bg-black container mx-auto flex justify-center h-screen'>
      <Head>
        <title>Happy Birthday Mridula 😍</title>
      </Head>
      <div className='flex overflow-hidden'>
        <div>
          {content1.map((text, index) => (
            <p
              key={index}
              className='text-[11px] lg:text-base whitespace-no-wrap'
              style={{
                transition: 'color 0.3s ease',
                color: indexes[0] === index ? 'lightpink' : '#374151',
              }}
            >
              {text}
            </p>
          ))}
        </div>
        <div>
          {content2.map((text, index) => (
            <p
              key={index}
              className='text-[11px] lg:text-base whitespace-no-wrap'
              style={{
                transition: 'color 0.3s ease',
                color: indexes[1] === index ? 'lightyellow' : '#374151',
              }}
            >
              {text}
            </p>
          ))}
        </div>
        <div>
          {content3.map((text, index) => (
            <p
              key={index}
              className='text-[11px] lg:text-base whitespace-no-wrap'
              style={{
                transition: 'color 0.3s ease',
                color: indexes[2] === index ? 'lightblue' : '#374151',
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        type='button'
        onClick={() => setCurrentStep(2)}
        className='p-5 bg-blue-500 rounded-full fixed right-5 bottom-16 text-white'
      >
        Next
      </motion.button>
      <Confetti height={height} width={width} />
      <style jsx>
        {`
          @keyframes color-change1 {
            0% { color: gray; }
            100% { color: lightpink; }
          }
          @keyframes color-change2 {
            0% { color: gray; }
            100% { color: lightyellow; }
          }
          @keyframes color-change3 {
            0% { color: gray; }
            100% { color: lightblue; }
          }
        `}
      </style>
    </section>
  );
};

export default HappyBirthday;
