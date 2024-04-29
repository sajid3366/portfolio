import { MdCastForEducation } from "react-icons/md";

const Education = () => {
    return (
        <div className=" max-w-5xl my-[120px]">
            <div>
                <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-10 w-[140px] flex  justify-center items-center gap-x-2 uppercase"><MdCastForEducation></MdCastForEducation>Education</h1>
                <h2 className="text-5xl ml-[50px] mb-5">Education</h2>
                <div className="ml-[50px]  md:flex gap-12">
                    <div className="md:w-1/2 ">
                        <h3>Bachelor of Science in CSE,<span className="italic"> Bangladesh University</span></h3>
                        <p>01/2022 – present | Bangladesh</p>
                        <p>CGPA: 3.82 (Out of 4.00)</p>
                    </div>
                    <div className="md:w-1/2 mt-5 md:mt-0">
                        <h3>Higher Secondary Certificate in Science,<span className="italic"> Satkhira Govt. College</span></h3>
                        <p>06/2018 – 03/2020 | Bangladesh</p>
                        <p>GPA: 5.00 (Out of 5.00)</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Education;