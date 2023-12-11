import Aside from "./Aside";
import Introduce from "./Introduce";

const Home = () => {
    return (
        <div className=" px-10 mt-5 mb-12 flex gap-x-16">
            <Aside></Aside>
            <Introduce></Introduce>
        </div>
    );
};

export default Home;