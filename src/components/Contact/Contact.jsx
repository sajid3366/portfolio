import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className=" max-w-6xl mx-auto my-12 px-4">

            <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-10 w-[140px] flex  justify-center items-center gap-x-2 uppercase"><MdEmail></MdEmail>contact</h1>
            <h2 className="text-3xl">Let's Work Together<span className="text-[#28e98c]">!</span></h2>
            <p className="font-semibold mt-5">ahteshamsajid8@gmail.com</p>
            <form className="max-w-4xl mx-auto text-center mt-10">
                <input type="text" name="name" className=" block md:ml-[92px] lg:ml-[170px] py-2 px-3 border-[1px] border-gray-400 rounded-sm w-full md:w-[75%] lg:w-[62%] mb-2" placeholder="Enter Your Name" id="" />
                <input type="email" name="name" className="block py-2 px-3 md:ml-[92px] lg:ml-[170px] border-[1px] border-gray-400 rounded-sm w-full md:w-[75%] lg:w-[62%] mb-2" placeholder="Enter Your Email" id="" />
                <textarea name="message" className="border-[1px] border-gray-400 w-full md:w-[554px] rounded-sm px-3 py-2" placeholder="Messege" id="" rows="10"></textarea>
                <p className="bg-[#28e98c] w-[115px] md:w-[180px] ml-[140px] md:ml-[270px] lg:ml-[360px] mt-5 py-2 md:py-3 md:text-xl rounded-md flex gap-2 items-center justify-center cursor-pointer">Send Message</p>
            </form>


        </div>
    );
};

export default Contact;