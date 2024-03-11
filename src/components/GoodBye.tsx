"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"
import { getBrandData } from "../../../NPM Library/shas-app-controller/src/client";

const GoodBye: React.FC<any> = () => {

    const { brandData } = getBrandData();

    return (
        <motion.div
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-12 px-6 md:px-12 relative flex min-h-screen items-center"
        >
            <div className="max-w-3xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: '50px' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Thank You for Celebrating!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: '50px' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg md:text-xl mb-8"
                >
                    Your presence made it even more special. Let's cherish these memories forever!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: '50px' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-full py-3 px-8 font-bold text-lg md:text-xl shadow-lg focus:outline-none"
                    >
                        Say Goodbye
                    </motion.button>
                </motion.div>
            </div>
            {brandData && (
                <footer className="absolute bottom-0 left-0 w-full">
                    <section className="container mx-auto">
                        <div className="flex space-x-2 items-center">
                            {brandData.icon && (
                                <Link href={brandData.website || "https://cloudburstlab.vercel.app"}>
                                    <Image src={brandData.icon} alt={`${brandData.name} logo`} height={150} width={200} />
                                </Link>
                            )}
                            <p>A product of {brandData.name}</p>
                        </div>
                        {brandData?.copyrightText && (
                            <p className="py-1.5 text-center bg-gray-700/50 rounded">{brandData.copyrightText}</p>
                        )}
                    </section>
                </footer>
            )}

        </motion.div>
    )
};

export default GoodBye;