import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading}  = useContext(AuthContext);
    const location = useLocation();
    
    if (loading){
        return <Loading />
    }
    else if(user && user?.email){
        return children;
    }
    else if(!user) {
       return <Navigate state={location.pathname} to={'/login'} />
    }
};

export default PrivateRoute;