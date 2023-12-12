import Aside from "./Aside";
import Education from "./Education";
import Introduce from "./Introduce";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className=" px-10 mt-5 mb-12 ">
            <div className="lg:flex gap-x-24">
                <Aside></Aside>
                <div>
                    <Introduce></Introduce>
                    <Education></Education>
                    <Skills></Skills>
                </div>
            </div>
        </div>
    );
};

export default Home;