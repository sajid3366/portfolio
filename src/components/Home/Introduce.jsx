import { MdHome } from "react-icons/md";

const Introduce = () => {
    return (
        <div className="mt-[60px] max-w-4xl">
            <div>
                <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-10 w-[140px] flex  justify-center items-center gap-x-2"><MdHome></MdHome>INTRODUCE</h1>
                <div className="ml-[50px]">
                    <h2 className="text-7xl">Ahtesham Sajid</h2>
                    <h3 className="text-3xl text-red-400 my-3">Web Developer</h3>
                    <p className="text-[#6c757d]">Full Stack Web Developer. I am working with React, Node.js,Express JS, React Native and MongoDB. I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).I can provide clean code and pixel perfect design.</p>
                    <div className="mt-8 flex  gap-x-16">
                        <div className="w-[100px]">
                            <p className="text-7xl text-[#28e98c]">6+</p>
                            <p className="uppercase text-sm text-[#6c757d] mt-3">Months of experience</p>
                        </div>
                        <div className="w-[150px]">
                            <p className="text-7xl text-[#28e98c]">30+</p>
                            <p className="uppercase text-sm text-[#6c757d] mt-3">Projects Completed</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;