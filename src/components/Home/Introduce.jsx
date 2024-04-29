import { MdHome } from "react-icons/md";
import Typewriter from 'react-ts-typewriter';
const Introduce = () => {
    return (
        <div className="mt-[60px] max-w-5xl">
            <div>
                <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-10 w-[140px] flex  justify-center items-center gap-x-2"><MdHome></MdHome>INTRODUCE</h1>
                <div className="ml-[50px]">
                    <h2 className="text-4xl md:text-7xl">Ahtesham Sajid</h2>

                    <h3 className="text-3xl text-red-400 my-3"><Typewriter text='Web Developer' /></h3>
                    <p className="text-[#6c757d]">Full Stack Web Developer. I am working with React, Node.js,Express JS, React Native and MongoDB. I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).I can provide clean code and pixel perfect design.</p>

                    <div className="mt-8 flex  gap-x-24">
                        <div className="w-[100px]">
                            <p className="text-4xl md:text-7xl text-[#28e98c]">10+</p>
                            <p className="uppercase text-sm text-[#6c757d] mt-3 ml-4">Months of experience</p>
                        </div>
                        <div className="w-[150px]">
                            <p className="text-4xl md:text-7xl text-[#28e98c]">15+</p>
                            <p className="uppercase text-sm text-[#6c757d] mt-3">Projects Completed</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;