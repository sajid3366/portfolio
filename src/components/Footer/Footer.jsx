import { Link } from "react-router-dom";
import linkedInLogo from '../../../public/image/linkedin-logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10  bg-neutral text-neutral-content">
                <aside>
                    <p className="font-bold">
                        <ul className="flex gap-x-3 items-center underline">
                            <li><Link to="/project">Project</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </p>
                </aside>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/ahtesham-sajid-68aa2022a/"><img className="w-[60px] h-[60px]" src={linkedInLogo} alt="" /></a>
                        <a href="https://github.com/sajid3366"><img className="w-[60px] h-[60px]" src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="" /></a>

                    </div>
                </nav>
            </footer>
            <div className=" footer-center p-4 bg-black text-white">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Ahtesham Sajid</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;