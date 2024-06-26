import { Link, NavLink } from "react-router-dom";
import image from '../../../public/image/favicon.png'

const Navbar = () => {
    return (

        <div className="navbar bg-neutral text-white px-8 py-3 shadow-md">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FFFF]  font-bold" : isPending ? "pending" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to="/project" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FFFF]  font-bold" : isPending ? "pending" : ""
                        }>Project</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FFFF]  font-bold" : isPending ? "pending" : ""
                        }>About</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FFF]  font-bold" : isPending ? "pending" : ""
                        }>Contact</NavLink></li>
                    </ul>
                </div>

            </div>
            <div className="w-full lg:-ml-[450px]">
                <img src={image} className="w-10 h-10 mr-1 hidden md:block" alt="" />
                <Link to="/"><button className="text-2xl text-neutral-content">Ahtesham Sajid</button></Link>
            </div>

            <div className="navbar-end">
                <ul className=" hidden lg:flex gap-x-3 items-center text-gray-500 mr-10">
                    <li><NavLink to="/" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FFFF]  font-bold" : isPending ? "pending" : ""
                    }>Home</NavLink></li>
                    <li><NavLink to="/project" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FFFF]  font-bold" : isPending ? "pending" : ""
                    }>Project</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FFFF]  font-bold" : isPending ? "pending" : ""
                    }>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive, isPending }) =>
                        isActive ? "text-[#FFF]  font-bold" : isPending ? "pending" : ""
                    }>Contact</NavLink></li>

                </ul>
                <p className="bg-[#28e98c] px-3 py-1 text-lg rounded-sm flex gap-2 items-center justify-center cursor-pointer hover:transition duration-700 hover:scale-110"><a href="https://drive.google.com/file/d/16AP1Mh8FMHBSKOanizvMbP-JQoQpbvr2/view?usp=drive_link" target="_blank" rel="noreferrer"> Resume</a></p>

            </div>
        </div>

    );
};

export default Navbar;