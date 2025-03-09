import Navbar from "../components/Navbar";

const Error = () => {
    return (
        <div className="container mx-auto ">
            <Navbar />
            <div className="flex justify-center items-center">
                <img className=" h-[calc(100vh-100px)]" src="/error.png" alt="" />
            </div>
        </div>
    );
};

export default Error;