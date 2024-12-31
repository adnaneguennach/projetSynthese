import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Example action types
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

// Example action creators
const toggleSidebar = () => ({ type: TOGGLE_SIDEBAR });

const Sidebar = () => {
    const dispatch = useDispatch();
    const switchSidebar = useSelector((state) => state.switchSidebar);

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className={`h-screen ${switchSidebar ? 'w-1/6' : 'w-[50px]'} 
            bg-white shadow-xl text-black transition-all duration-300 ease-in-out`}>
            <div className="cont-test flex justify-end p-3">
                <i className={`bi text-black bi-layout-sidebar-inset${!switchSidebar ? '-reverse' : ''} text-[25px] cursor-pointer`}
                    onClick={handleToggleSidebar}></i>
            </div>
            <nav className={`flex flex-col ${switchSidebar ? 'p-4' : 'p-2'} space-y-4`}>
                <Link to="/home" className="flex items-center space-x-2 text-black">
                    <span className="text-xl">{switchSidebar ? '🏠' : '🏠'}</span>
                    {switchSidebar && <span className="text-sm">Dashboard</span>}
                </Link>
                <Link to="/members" className="flex items-center space-x-2 text-black">
                    <span className="text-xl">{switchSidebar ? '👥' : '👥'}</span>
                    {switchSidebar && <span className="text-sm">Members</span>}
                </Link>
                <Link to="/earnings" className="flex items-center space-x-2 text-black">
                    <span className="text-xl">{switchSidebar ? '💰' : '💰'}</span>
                    {switchSidebar && <span className="text-sm">Earnings</span>}
                </Link>
                <Link to="/settings" className="flex items-center space-x-2 text-black">
                    <span className="text-xl">{switchSidebar ? '⚙️' : '⚙️'}</span>
                    {switchSidebar && <span className="text-sm">Settings</span>}
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;