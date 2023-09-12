import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }

    const navItems = <>
        <li><Link className='text-xl ' to='/'>Home</Link></li>
        <li><Link className='text-xl ' to='/menu'>Menu</Link></li>
        <li><Link className='text-xl  ' to='/order/salad'>Order Food</Link></li>
        <li><Link className='text-xl  ' to='/secret'>Secret</Link></li>
        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
            </> : <>
                <li><Link className='text-xl  ' to='/login'>Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost  text-xl uppercase">Spicy Restaurant</Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='/' className=" text-xl">
                        {user &&
                            user ? user?.displayName : <p className='text-white'><FaUserAlt></FaUserAlt></p>
                        }

                    </a>
                    {user &&
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;