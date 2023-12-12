import { PiProjectorScreenChart } from "react-icons/pi";

const Project = () => {
    return (
        <div className="max-w-6xl mx-auto my-12 flex gap-x-10 px-5">

            <div>
                <h1 className="border-gray-600 border-[1px] px-3 py-2 rounded-full text-sm text-center mb-8 w-[140px] flex  justify-center items-center gap-x-2 uppercase"><PiProjectorScreenChart></PiProjectorScreenChart>Portfilio</h1>
                <h1 className="text-3xl mb-8">Showcasing some of my <span className="text-[#28e98c]">Best Work</span></h1>
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="rounded-md shadow-sm shadow-[#79AC78] ">
                        <figure><img className=" h-[30vh] w-full rounded-t-md" src="https://i.ibb.co/N9wwS4K/23237.jpg" alt="Smart Build" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Smart Build</h2>
                            <p>Building Management Project</p>
                            <div className="card-actions">
                                <p className="bg-[#28e98c] w-[250px] mt-12 py-3 text-xl rounded-md flex gap-2 items-center justify-center cursor-pointer"><a href="https://tasty-tooth.surge.sh/" target="_blank" rel="noreferrer">Live Preview</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-sm shadow-[#79AC78] rounded-md">
                        <figure><img className="h-[30vh] w-full rounded-t-md" src="https://i.ibb.co/6yq3BFx/banner.jpg" alt="Study Corner" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Study Corner!</h2>
                            <p>Online Group Study and Assignment Submission Project</p>
                            <div className="card-actions">
                                <p className="bg-[#28e98c] w-[250px] mt-6 py-3 text-xl rounded-md flex gap-2 items-center justify-center cursor-pointer"><a href="https://wrong-motion.surge.sh/" target="_blank" rel="noreferrer">Live Preview</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-sm shadow-[#79AC78] rounded-md">
                        <figure><img className="h-[30vh] w-full rounded-t-md" src="https://i.ibb.co/VNTmmP1/car-is-driving-road-night-forest.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Car Hant</h2>
                            <p>Car Buy and Sell Projrct</p>
                            
                            <div className="card-actions">
                                <p className="bg-[#28e98c] w-[250px] mt-12 py-3 text-xl rounded-md flex gap-2 items-center justify-center cursor-pointer"><a href="https://smooth-channel.surge.sh/" target="_blank" rel="noreferrer">Live Preview</a></p>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Project;