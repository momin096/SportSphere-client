import { SyncLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            {/* <SyncLoader
                color="#f649ff"
                size={20}
            /> */}
            {/* <span className="loading loading-bars loading-xl"></span> */}
            <img src="/loading.gif" alt="" />
        </div>
    );
};

export default Loading;