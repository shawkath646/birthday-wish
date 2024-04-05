import Image from 'next/image';
import { motion } from 'framer-motion';
import wishMessages from "@/JsonData/WishMessages.json";
import birthdayCake from '@/assets/image_processing20200225-8988-1si51jv.gif'

interface MessageProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Message: React.FC<MessageProps> = ({ setCurrentStep }) => {

    const dateOfBirth = process.env.NEXT_PUBLIC_DATE_OF_BIRTH || "2001-01-01";

    const dob = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    return (
        <section className="bg-white h-full">
            <div className="container mx-auto">
                <div className="p-5 space-y-4 pt-20">
                    <h2 className='text-center font-medium text-2xl lg:text-3xl text-black'>Congratulations! You are now {age}!🤭</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 px-4 md:px-8 lg:px-16 py-8">
                        {wishMessages.messages.map(({ message, image }, index) => (
                            <motion.article
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? 50 : -50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 1
                                    }
                                }}
                                whileHover={{
                                    scale: 0.95
                                }}
                                viewport={{ once: true }}
                                className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
                            >
                                <div className="md:flex">
                                    <div className="md:flex-shrink-0">
                                        <div className="h-48 w-full md:h-full md:w-48 relative">
                                            <Image
                                                src={image} // Path to your birthday image
                                                alt="Birthday Wish"
                                                layout="fill"
                                                className="rounded-lg object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Happy Birthday!</div>
                                        <p className="mt-2 text-gray-600">{message}</p>
                                        <div className="mt-4 space-y-2">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Birthday</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Celebration</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5 }}
                    type='button'
                    onClick={() => setCurrentStep(3)}
                    className='p-5 bg-yellow-500 hover:bg-yellow-600 transition-all rounded-full fixed right-5 bottom-16 text-white'
                >
                    Next
                </motion.button>
            </div>
            <div className="bg-[#ff6666] flex items-center justify-center">
                <Image src={birthdayCake.src} alt="Birthday Cake" height={350} width={350} />
            </div>
        </section >
    );
}

export default Message;