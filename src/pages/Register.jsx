import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const { createUserWithEmail, updateUserProfile, setUser, setLoading, signInWithGoogle } = useContext(AuthContext);

    const [pass, setPass] = useState(false);
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const notify = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        draggable: false,
    });

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            setError('One uppercase one lowercase at least 6 character')
            return;
        }

        const updateInfo = { displayName: name, photoURL: photo }

        createUserWithEmail(email, password)
            .then((result) => {
                setUser(result.user)
                updateUserProfile(updateInfo)
                    .then(() => {
                        notify("Account create successfully")
                        navigate('/')
                    })
            })
            .catch(error => {
                console.log(error.code)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                notify("Account create successfully")
            })
    }

    const handleShowPassword = () => {
        setPass(!pass);
    }
    return (
        <div className="container mx-auto bg-base-200 mt-5 py-10 lg:py-20 px-5">
            <h2 className="text-center text-5xl font-semibold py-5">Register Now</h2>
            <form onSubmit={handleLogin} className="mx-auto max-w-lg">
                <fieldset className="fieldset flex flex-col items-center justify-center ">
                    <div className="w-full">
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Name</label>
                        <input name="name" type="name" className="input w-full text-xl py-6 " placeholder="Enter your Name" />
                    </div>
                    <div className="w-full">
                        <label className="fieldset-label text-xl text-base-content  mb-1 font-semibold">Photo</label>
                        <input name="photo" type="text" className="input w-full text-xl py-6 " placeholder="Enter Photo URL" />
                    </div>
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
                    {
                        error && <p className="text-red-500 text-base">{error}</p>
                    }

                    <button className="w-full mt-5">
                        <input type="submit" className="border border-orange-500   hover:bg-orange-400   text-base-content w-full text-xl py-2 rounded-lg font-semibold " value={'Register'} />
                    </button>
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

export default Register;