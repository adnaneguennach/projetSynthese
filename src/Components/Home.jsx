import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import userIcon from '../assets/userIcon.png';
import DashboardCards from './Dashboard';
import MoneyGraph from './MoneyGraph';
import {useSelector} from 'react-redux';



const Home = () => {
    const [numberMembers, setNumberMembers] = useState(0);
    const [moneyTotal, setMoneyTotal] = useState(1000);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const switchSidebar = useSelector((state) => state.switchSidebar);
    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const members = [
        {
            name: 'John Doe',
            lastSignIn: '2024-12-30',
            abonnementDuration: 1, 
        },
        {
            name: 'Jane Smith',
            lastSignIn: '2024-12-28',
            abonnementDuration: 2,
        },
        {
            name: 'Alice Johnson',
            lastSignIn: '2024-12-20',
            abonnementDuration: 3, 
        },
    ];


    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full h-screen bg-[#F3F4F6]">
                <div className="headerContainer  h-[7vh] w-full shadow-lg flex justify-between items-center p-2">
                    <div className="flex gap-2 items-center">
                        {/* <span className="text-white text-[15px]">Dashboard</span> */}
                    </div>
                    <div className="profileCont flex gap-2 items-center relative">
                        <img src={userIcon} alt="User Icon" className="w-[30px]" />
                        <span className="text-blue-500 font-bold pr-5 text-[15px]">Admin <i className="fa fa-angle-down cursor-pointer" onClick={toggleDropdown}></i></span>
                        {dropdownOpen && (
                            <div className="absolute top-[3vh] my-2 right-[3vh] bg-white shadow-lg rounded p-2">
                                <button className="text-red-500 text-[14px]" onClick={() => console.log('Deconnexion')}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>

                <DashboardCards />
                <div className="p-6 bg-gray-100 flex gap-7 ">
                    <MoneyGraph />
                    <div className={`cardsContainerRight `}>
                            <div className={`bg-white  ${switchSidebar ? 'w-[26vw]' : 'w-[36vw]'} transition-all duration-300 ease-in-out h-full rounded-lg shadow-lg p-6 overflow-auto`}>
                                <div className="text-xl font-bold mb-4">Members List</div>
                                <ul>
                                    {members.map((member, index) => (
                                        <li key={index} className="flex justify-between mb-3">
                                            <div>
                                                <div className="font-semibold">{member.name}</div>
                                                <div className="text-sm text-gray-500">Last Sign In: {member.lastSignIn}</div>
                                            </div>
                                            <div className="text-blue-500">
                                                {member.abonnementDuration} {member.abonnementDuration > 1 ? 'Months' : 'Month'}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;