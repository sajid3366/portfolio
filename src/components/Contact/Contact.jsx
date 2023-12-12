import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className=" max-w-6xl mx-auto my-12 ">

            <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-10 w-[140px] flex  justify-center items-center gap-x-2 uppercase"><MdEmail></MdEmail>contact</h1>
            <h2 className="text-3xl">Let's Work Together<span className="text-[#28e98c]">!</span></h2>
            <p className="font-semibold mt-5">ahteshamsajid8@gmail.com</p>
            <form className="max-w-4xl mx-auto text-center mt-10">
                <input type="text" name="name" className=" block ml-[170px] py-2 px-3 border-[1px] border-gray-400 rounded-sm w-[62%] mb-2" placeholder="Enter Your Name" id="" />
                <input type="email" name="name" className="block py-2 px-3 ml-[170px] border-[1px] border-gray-400 rounded-sm w-[62%] mb-2" placeholder="Enter Your Email" id="" />
                <textarea name="message" className="border-[1px] border-gray-400 rounded-sm px-3 py-2" placeholder="Messege" id="" cols="70" rows="10"></textarea>
                <p className="bg-[#28e98c] w-[180px] ml-[340px] mt-5 py-3 text-xl rounded-md flex gap-2 items-center justify-center cursor-pointer">Send Message</p>
            </form>


        </div>
    );
};

export default Contact;