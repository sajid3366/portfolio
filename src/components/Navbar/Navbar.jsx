import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div className="navbar bg-neutral text-white px-8 shadow-md sticky">
            <div className="flex-1">
                <button className="text-2xl text-neutral-content">Ahtesham Sajid</button>
            </div>
            <div className="mr-10">
                <ul className="flex gap-x-3 items-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
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