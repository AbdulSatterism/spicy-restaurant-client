import React from 'react';
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardLayout.css'
import useCart from '../hooks/useCart';

const DashboardLayout = () => {
    const [cart] = useCart();
    //TODO: load data from the server for dynamic admin pannel
    const isAdmin = true;

    return (
        <div className="drawer  lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  min-h-full">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li className='text-white' ><NavLink to='/dashboard/home' ><FaHome></FaHome>Admin Home</NavLink></li>
                            <li className='text-white'><NavLink to='/dashboard/addItem' ><FaUtensils></FaUtensils> Add Item</NavLink></li>
                            <li className='text-white'><NavLink to='/dashboard/manageBooking' ><FaBook></FaBook> Manage Booking</NavLink></li>
                            <li className='text-white'><NavLink to='/dashboard/allusers' ><FaUsers></FaUsers> All Users</NavLink></li>
                        </>
                            :
                            <>
                                <li className='text-white' ><NavLink to='/dashboard/home' ><FaHome></FaHome>User Home</NavLink></li>
                                <li className='text-white'> <NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink> </li>
                                <li className='text-white'><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li className='text-white'>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                    </NavLink>

                                </li>
                            </>
                    }


                    <div className="divider"></div>

                    <li className='text-white'><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li className='text-white'><NavLink to='/menu'><FaBars></FaBars> Our Menu</NavLink></li>
                    <li className='text-white'><NavLink to='/order/salad'><FaShoppingCart></FaShoppingCart> Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardLayout;