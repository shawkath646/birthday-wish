interface GiftProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const Gift: React.FC<GiftProps> = ({ setCurrentStep }) => {
    return (
        <section className='bg-gradient-to-tr from-rose-500 to-violet-500 h-full'>
            <div className="container mx-auto flex justify-center items-center h-full">
                <div className="bg-white rounded max-w-5xl p-4 h-[500px] mx-3 lg:mx-0 space-y-4">
                    <p className="text-blue-500">I remember all the gifts you gave me! When I meet you, I'll give you all the gifts you haven't received yet.</p>
                    <p className="text-purple-500">I didn't have enough time to prepare it thoroughly and include all the content. I managed to put it together within 8 hours after arriving home.😥</p>
                    <p className="text-emerald-500 text-center text-xl">Allah Hafez! Gul Alu😇</p>
                </div>
            </div>
        </section>
    );
}

export default Gift;