import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip';
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Login Successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    draggable: false,
                });
            })

    }
    const navLinks = <>
        <li>
            <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/all-products'}>All Sports Equipment</NavLink>
        </li><li>
            <NavLink to={'/add-equipment'}>Add Equipment</NavLink>
        </li>
        <li>
            <NavLink to={'/my-products'}>My Equipment List</NavLink>
        </li>

        {
            user ? <li className="lg:hidden" onClick={handleLogOut} ><Link to={'/login'} >Log out</Link></li>
                : <li className="lg:hidden"><Link to={'/login'} >Login</Link></li>
        }
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl lg:text-3xl flex gap-2 items-center">
                        <img className="w-7 lg:w-10" src="/public/physical.png" alt="" />
                        <p className="font-medium flex gap-1"><span className="text-blue-500">Sport</span> <span className="text-orange-500">Sphere</span></p>
                    </Link>
                </div>
                <div className="navbar-center hidden xl:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-10">

                    {
                        user ? <img id="profile" data-tooltip-delay-hide={300} className="w-15 h-15 object-cover rounded-full" src={user.photoURL} alt="" /> : ''
                    }
                    {
                        user ? <Tooltip anchorSelect="#profile" className="z-50 flex flex-col items-center ">
                            <img className="w-25 rounded-lg" src={user.photoURL} alt="" />
                            <p className="">{user.photoURL}</p>
                            <h2 className="text-xl my-5">{user.displayName}</h2>
                        </Tooltip> : ''
                    }
                    {
                        user ? <button onClick={handleLogOut} className="px-5 py-1 border border-orange-500 hover:bg-gray-400/30 hover:border-white text-2xl rounded-sm hidden lg:block"><Link to={'/login'} >Log out</Link></button>
                            : <button className="px-5 py-1 border border-orange-500 hover:bg-gray-400/30 hover:border-white text-2xl rounded-sm hidden lg:block"><Link to={'/login'} >Login</Link></button>

                    }
                    {/* THEME CONTROLLER */}
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="dark" />

                        {/* sun icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current text-orange-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;