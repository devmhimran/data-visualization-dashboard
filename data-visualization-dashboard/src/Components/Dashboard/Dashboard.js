import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../Assets/dashboard-visualization-logo.svg';
import { useState, useEffect } from "react";
import { BiHomeAlt, BiSelectMultiple, BiUser } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineBarChart, AiOutlineStar, AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Avatar
} from "@material-tailwind/react";
import { BsCalendar4, BsChatLeft, BsEnvelope, BsSearch } from 'react-icons/bs';
import avatar from '../Assets/avatar.jpg';
import HeaderNav from '../HeaderNav/HeaderNav';

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: <><BiHomeAlt ></BiHomeAlt></>, Link: "/" },
        { title: "Analytics", src: <><AiOutlineBarChart></AiOutlineBarChart></>, Link: "/analytics" },
        { title: "Accounts", src: <><BiUser></BiUser></>, gap: true, Link: "/no-link" },
        { title: "Schedule ", src: <><BsCalendar4></BsCalendar4></>, Link: "/no-link" },
        { title: "Search", src: <><BsSearch></BsSearch></>, Link: "/no-link" },
        { title: "Inbox", src: <><BsChatLeft></BsChatLeft></>, Link: "/no-link" },
        { title: "Setting", src: <><AiOutlineSetting></AiOutlineSetting></>, Link: "/no-link" },
    ];
 
    return (

        <div className="flex">
            <div
                className={` ${open ? "w-56" : "w-20 "
                    } bg-gray-100 h-screen p-5  absolute pt-8 relative duration-300`}
            >
                <AiOutlineArrowLeft
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                ></AiOutlineArrowLeft>
                <div className="flex gap-x-4 items-center">
                    <img src={logo} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                        }`} alt="" />
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-100 hover:ml-1 ease-in duration-100 text-gray-800 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <Link to={Menu.Link} className='flex'><span className='text-xl mr-2'>{Menu.src}</span>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                <HeaderNav></HeaderNav>
                <Outlet></Outlet>
            </div>
        </div>
    );


    // <div className='bg-red-900'>

    //     <Outlet></Outlet>
    // </div>

};

export default Dashboard;