import Project from "../Project/Project";
import Aside from "./Aside";
import Education from "./Education";
import Introduce from "./Introduce";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className=" px-10 mt-5 mb-12 ">
            <div className="lg:flex gap-x-20">
                <Aside></Aside>
                <div className="">
                    <Introduce></Introduce>
                    <Education></Education>
                    <Skills></Skills>
                    <Project></Project>
                </div>
            </div>
        </div>
    );
};

export default Home;