import image from '../../../public/image/Copy of IMG20230402132731.jpg'

const About = () => {
    return (
        <div className="max-w-6xl mx-auto my-12 flex gap-x-10">

            <div className="w-1/2">
                <h1 className='border-gray-600 border-[1px] px-3 py-2 rounded-full text-xs text-center mb-10 w-[100px]'>ABOUT</h1>
                <h1 className="text-4xl mb-5">Every great Web Application begin with an even better story</h1>
                <p className='text-justify'>I am a WEB Developer. I am working with React, Node.js,Express JS, React Native and MongoDB.I also have experience in developing static websites using HTML, CSS and JavaScript(ES6).I can provide clean code and pixel perfect design.</p>
                <p className='mt-5 text-justify'>
                    Full Stack Web Developer | Transforming ideas into interactive and user-friendly websites. Expertise in front-end technologies with a keen eye for design. Committed to delivering seamless digital experiences. Passionate about innovation, coding, and creating solutions that make an impact. Let's bring your vision to life!
                </p>
                <p className="bg-[#28e98c] w-[250px] mt-12 py-3 text-xl rounded-md flex gap-2 items-center justify-center cursor-pointer"><a href="https://drive.google.com/file/d/16AP1Mh8FMHBSKOanizvMbP-JQoQpbvr2/view?usp=drive_link" target="_blank" rel="noreferrer">Download Resume</a></p>

            </div>
            <div className="w-1/2">
                <img className='w-[500px] rounded-tl-[20px] rounded-br-[20px]' src={image} alt="" />
            </div>
        </div>
    );
};

export default About;