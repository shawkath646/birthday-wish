import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import birthdayCake from '@/assets/image_processing20200225-8988-1si51jv.gif'


interface MessageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Message: React.FC<MessageProps> = ({ setCurrentStep }) => {

    const text1 = 'Happy birthday Mridula!🥳 Sending my warmest congratulations on this special day of yours. May your journey ahead be filled with joy, success, and countless blessings.💝';
    const text2 = 'May Allah always guide you and help you achieve every dream you hold close to your heart. May He shower you with His grace, granting you strength and wisdom to overcome any obstacle that comes your way.🥰';
    const text3 = 'Remember, I am here for you, ready to lend a helping hand whenever you need it, no matter what.😇 Your happiness means the world to me, and Ill stand by your side through thick and thin, always. Sending my sincerest salaam to your elder sister, uncle, and aunt. Wishing them well and hoping they are also celebrating this special day with joy and love.❤️ Really missing you in this time.🥲';

    return (
        <section className="bg-gradient-to-tr from-blue-300 to-blue-400 h-full">
            <Head>
                <title>Hey ! Listen 😒</title>
            </Head>
            <div className="container mx-auto">
                <div className="flex items-center justify-center h-[70vh]">
                    <div className="p-5 space-y-2">
                        <h2 className='text-center font-semibold text-2xl lg:text-3xl text-black'>You are now 17!🤭</h2>
                        <motion.article
                            initial={{ opacity: 0, x: '-100px' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="border border-green-600 bg-green-600 bg-opacity-50 p-2 rounded"
                        >
                            {text1}
                        </motion.article>
                        <motion.article
                            initial={{ opacity: 0, x: '-100px' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 }}
                            className="border border-yellow-600 bg-yellow-600 bg-opacity-50 p-2 rounded"
                        >
                            {text2}
                        </motion.article>
                        <motion.article
                            initial={{ opacity: 0, x: '-100px' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2 }}
                            className="border border-rose-600 bg-rose-600 bg-opacity-50 p-2 rounded"
                        >
                            {text3}
                        </motion.article>
                    </div>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5 }}
                        type='button'
                        onClick={() => setCurrentStep(3)}
                        className='p-5 bg-yellow-500 rounded-full fixed right-5 bottom-16 text-white'
                    >
                        Next
                    </motion.button>
                </div>
            </div>
            <div className="h-[30vh] bg-[#ff6666] flex items-center justify-center">
                <Image src={birthdayCake.src} alt="Birthday Cake" height={350} width={350} className="" />
            </div>
        </section>
    );
}

export default Message;