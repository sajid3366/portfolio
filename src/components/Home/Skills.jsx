import { GiSkills } from "react-icons/gi";
import html from '../../../public/image/html.svg'
import css from '../../../public/image/css.png'
import react from '../../../public/image/react.png'
import tailwind from '../../../public/image/tailwind.png'
import nodejs from '../../../public/image/nodejs.png'
import mongo from '../../../public/image/mongo.png'
const Skills = () => {
    return (
        <div className="mt-[60px] max-w-5xl mb-32">
            <div>
                <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-10 w-[140px] flex  justify-center items-center gap-x-2 uppercase"><GiSkills></GiSkills>My Skills</h1>
                <div className="ml-[50px]">
                    <h2 className="text-5xl">My Advantages</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                        <div className="text-center border-gray-600 border-[1px] cursor-pointer py-5 rounded-md hover:shadow-md hover:shadow-orange-700 ">
                            <div className="flex justify-center">
                                <img className="w-[80px] " src={html} alt="" />
                            </div>
                            <p className="mt-2">HTML</p>
                        </div>
                        <div className="text-center border-gray-600 border-[1px] cursor-pointer py-5 rounded-md hover:shadow-md hover:shadow-blue-700">
                            <div className="flex justify-center">
                                <img className="w-[90px] " src={css} alt="" />
                            </div>
                            <p className="mt-2">CSS</p>
                        </div>
                        <div className="text-center border-gray-600 border-[1px] cursor-pointer py-5 rounded-md hover:shadow-md hover:shadow-yellow-500">
                            <div className="flex justify-center">
                                <img className="w-[90px] " src="https://ellipsiseducation.com/wp-content/uploads/2023/03/javascript.png" alt="" />
                            </div>
                            <p className="mt-2">Java Script</p>
                        </div>
                        <div className="text-center border-gray-600 border-[1px] cursor-pointer py-5 rounded-md hover:shadow-md hover:shadow-sky-500">
                            <div className="flex justify-center">
                                <img className="w-[90px] " src={react} alt="" />
                            </div>
                            <p className="mt-2">React</p>
                        </div>
                        <div className="text-center border-gray-600 border-[1px] cursor-pointer py-5 rounded-md hover:shadow-md hover:shadow-blue-700">
                            <div className="flex justify-center">
                                <img className="w-[130px] " src={tailwind} alt="" />
                            </div>
                            <p className="mt-3">Tailwind CSS</p>
                        </div>
                        <div className="text-center border-gray-600 border-[1px] cursor-pointer py-5 rounded-md hover:shadow-md hover:shadow-green-700">
                            <div className="flex justify-center">
                                <img className="w-[90px] " src={nodejs} alt="" />
                            </div>
                            <p className="mt-2">Node JS</p>
                        </div>

                        <div className="text-center border-gray-600 border-[1px] cursor-pointer py-5 rounded-md hover:shadow-md hover:shadow-green-700">
                            <div className="flex justify-center">
                                <img className="w-[80px] " src={mongo} alt="" />
                            </div>
                            <p className="mt-2">MongoDB</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;