import Aside from "./Aside";
import Introduce from "./Introduce";

const Home = () => {
    return (
        <div className=" px-10 mt-5 mb-12 ">
            <div className="flex gap-x-24">
                <Aside></Aside>
                <Introduce></Introduce>
            </div>
        </div>
    );
};

export default Home;