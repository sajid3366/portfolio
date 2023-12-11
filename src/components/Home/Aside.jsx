import { Link } from 'react-router-dom';
import image from '../../../public/image/Copy of IMG20230402132731.jpg'
import image2 from '../../../public/image/rsz_img20230801134626.jpg'
import linkedin from '../../../public/image/linkedin-logo.png'
import { MdEmail } from "react-icons/md";

const Aside = () => {
    return (
        <div className="w-[350px] h-[590px]  border-gray-500 border-[1px] py-5 px-3 rounded-md text-center">
            <h1 className="text-xl">Web Developer</h1>
            <img className='w-[300px] h-[300px] mx-auto mt-5 rounded-tl-[20px] rounded-br-[20px] mb-5' src={image} alt="" />
            <div className='flex gap-x-3 justify-center mb-5'>
                <a href="https://www.linkedin.com/in/ahtesham-sajid-68aa2022a/">
                    <div className=' border-gray-500 border-[1px] rounded-full p-5'>

                        <img className='w-[20px]' src={linkedin} alt="" />

                    </div>
                </a>
                <a href="https://github.com/sajid3366">
                    <div className=' border-gray-500 border-[1px] rounded-full p-5'>

                        <img className='w-[20px] text-white' src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="" />

                    </div>
                </a>
            </div>
            <Link to="/contact">
                <div className='px-5'>
                    <p className='bg-[#28e98c] py-3 text-xl rounded-full flex gap-2 items-center justify-center cursor-pointer'><MdEmail></MdEmail>HIRE ME!</p>
                </div>
            </Link>
        </div>
    );
};

export default Aside;