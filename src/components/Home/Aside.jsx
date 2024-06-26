import image2 from '../../../public/image/image2.png'
import image3 from '../../../public/image/—Pngtree—vector resume icon_4256778.png'
import linkedin from '../../../public/image/linkedin-logo.png'
import { MdEmail } from "react-icons/md";

const Aside = () => {
    return (
        <div className="lg:w-[350px] md:w-[500px] mx-auto h-[590px]  border-gray-500 border-[1px] py-5 px-3 rounded-tl-[20px] rounded-br-[20px] text-center sticky lg:top-14 ">
            <h1 className="text-xl">Web Developer</h1>
            <img className='w-[300px] h-[300px] mx-auto mt-5 rounded-tl-[20px] rounded-br-[20px] mb-5' src={image2} alt="" />
            <div className='flex gap-x-3 justify-center mb-5'>
                <a href="https://www.linkedin.com/in/ahtesham-sajid-68aa2022a/" target="_blank" rel="noreferrer">
                    <div className=' border-gray-500 border-[1px] rounded-full p-5'>

                        <img className='w-[20px]' src={linkedin} alt="" />

                    </div>
                </a>
                <a href="https://github.com/sajid3366" target="_blank" rel="noreferrer">
                    <div className=' border-gray-500 border-[1px]  rounded-full p-5'>

                        <img className='w-[20px] rounded-full bg-white' src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="" />

                    </div>
                </a>
                <a href="https://drive.google.com/file/d/16AP1Mh8FMHBSKOanizvMbP-JQoQpbvr2/view?usp=drive_link" target="_blank" rel="noreferrer">
                    <div className=' border-gray-500 border-[1px] rounded-full p-5'>

                        <img className='w-[20px] text-white' src={image3} alt="" />

                    </div>
                </a>
            </div>
            <a href="mailto:ahteshamsajdi8@gmail.com">
                <div className='px-5'>
                    <p className='bg-[#28e98c] py-3 text-xl rounded-full flex gap-2 items-center justify-center cursor-pointer hover:bg-neutral hover:border-[#28e98c] hover:border-[1px]'><MdEmail></MdEmail>HIRE ME!</p>
                </div>
            </a>

        </div>
    );
};

export default Aside;