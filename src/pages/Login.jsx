import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { signInWithEmail, signInWithGoogle ,setUser } = useContext(AuthContext);

    const [pass, setPass] = useState(false);

    const location = useLocation()

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmail(email, password) 
        .then(result =>{
            setUser(result.user)
            navigate(location?.state ? location.state : '/')
            
        })
        .catch(error =>{
            console.log(error.code)
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            setUser(result.user);
        })
    }

    const handleShowPassword = () => {
        setPass(!pass);
    }

    return (
        <div className="container mx-auto bg-base-200 mt-5 py-10 lg:py-20 px-5">
            <h2 className="text-center text-5xl font-semibold py-5">Login Now</h2>
            <form onSubmit={handleLogin} className="mx-auto max-w-lg">
                <fieldset className="fieldset flex flex-col items-center justify-center ">
                    <div className="w-full">
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Email</label>
                        <input name="email" type="email" className="input w-full text-xl py-6 " placeholder="Enter your email" />
                    </div>
                    <div className="w-full">
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Password</label>
                        <label className="input w-full text-xl py-2">
                            <input name="password" type={`${pass ? 'text' : 'password'}`} className="py-6" placeholder="Enter your password" />
                            <button className="border" onClick={handleShowPassword}>
                                {
                                    pass ? <FaRegEyeSlash className="text-2xl cursor-pointer" /> : <FaRegEye className="text-2xl cursor-pointer" />
                                }
                            </button>
                        </label>
                    </div>
                    {/* ------------------- */}

                    <div className="py-2 cursor-pointer text-base"><a className=" link-hover justify-start">Forgot password?</a></div>

                    <button className="w-full mt-5">
                        <input type="submit" className="border border-orange-500   hover:bg-orange-400   text-base-content w-full text-xl py-2 rounded-lg font-semibold " value={'Login'} />
                    </button>

                <p className="text-base py-3">Don't have an account ? <Link to={'/register'} className="font-bold hover:underline cursor-pointer hover:text-red-700  ">Register</Link></p>
                </fieldset>
            </form>
            <div className="flex items-center justify-center">
                <button onClick={handleGoogleSignIn} className=" mt-5 flex items-center gap-5 border border-blue-500 hover:bg-orange-500/20 rounded-lg hover:rounded-4xl text-xl px-10 py-3">
                    <FcGoogle className="text-3xl" />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;