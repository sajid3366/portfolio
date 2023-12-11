import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <div className="navbar bg-neutral text-white px-8 py-3 shadow-md sticky">
            <div className="flex-1">
                <Link to="/"><button className="text-2xl text-neutral-content">Ahtesham Sajid</button></Link>
            </div>
            <div className="mr-10">
                <ul className="flex gap-x-3 items-center text-gray-500">
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
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="bg-[#28e98c] text-white font-semibold rounded-sm"><a href="https://drive.google.com/file/d/16AP1Mh8FMHBSKOanizvMbP-JQoQpbvr2/view?usp=drive_link" target="_blank" rel="noreferrer">Resume</a></li>

                </ul>
            </div>
        </div>

    );
};

export default Navbar;