import image from '../../../public/image/image1.jpg'
import '../Shared/Shared.css'
const About = () => {
    return (
        <div className="max-w-6xl mx-auto my-12  md:flex gap-x-10 px-4">

            <div className="md:w-1/2">
                <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-10 w-[140px] flex  justify-center items-center gap-x-2 uppercase">about</h1>
            <div className='ml-[50px]'>
                <h1 className="text-3xl mb-5">Every great Web Application begin with an even better story</h1>
                <p className='text-justify'>I am a WEB Developer. I am working with React, Node.js,Express JS, React Native and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).I can provide clean code and pixel perfect design.</p>
                <p className='mt-5 text-justify'>
                    Full Stack Web Developer | Transforming ideas into interactive and user-friendly websites. Expertise in front-end technologies with a keen eye for design. Committed to delivering seamless digital experiences. Passionate about innovation, coding, and creating solutions that make an impact. Let's bring your vision to life!
                </p>
                <div className='flex justify-center md:flex-none md:justify-normal'>
                    <p className="bg-[#28e98c]  w-[250px] mt-12 py-3 text-xl rounded-md flex gap-2 items-center justify-center cursor-pointer color "><a href="https://drive.google.com/file/d/16AP1Mh8FMHBSKOanizvMbP-JQoQpbvr2/view?usp=drive_link" target="_blank" rel="noreferrer">Download Resume</a></p>
                </div>

            </div>
            </div>
            <div className="md:w-1/2 mt-10">
                <img className='w-[500px] rounded-tl-[20px] rounded-br-[20px]' src={image} alt="" />
            </div>
        </div>
    );
};

export default About;