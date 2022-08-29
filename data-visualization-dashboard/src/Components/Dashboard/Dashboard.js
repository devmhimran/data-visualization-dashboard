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



const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: <><BiHomeAlt ></BiHomeAlt></> },
        { title: "Analytics", src: <><AiOutlineBarChart></AiOutlineBarChart></> },
        { title: "Accounts", src: <><BiUser></BiUser></>, gap: true },
        { title: "Schedule ", src: <><BsCalendar4></BsCalendar4></> },
        { title: "Search", src: <><BsSearch></BsSearch></> },
        { title: "Inbox", src: <><BsChatLeft></BsChatLeft></> },
        // { title: "Files ", src: <><AiOutlineSetting></AiOutlineSetting></>, gap: true },
        { title: "Setting", src: <><AiOutlineSetting></AiOutlineSetting></> },
    ];

    return (

        <div className="flex">
            <div
                className={` ${open ? "w-56" : "w-20 "
                    } bg-gray-100 h-screen p-5  pt-8 relative duration-300`}
            >
                <AiOutlineArrowLeft
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                ></AiOutlineArrowLeft>
                {/* <BiHomeAlt ></BiHomeAlt> */}
                {/* <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          /> */}
                <div className="flex gap-x-4 items-center">
                    <img src={logo} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                        }`} alt="" />
                    {/* <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Designer
            </h1> */}
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-100 hover:ml-1 ease-in duration-100 text-gray-800 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <span className='text-xl'>{Menu.src}</span>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-screen flex-1 p-7">
                {/* <h1 className="text-2xl font-semibold ">Home Page</h1>
           */}

                <div className="header__nav">
                    <div className="card shadow rounded py-2 px-3">
                        <div className="card-body ">
                            <div className="header__container__main flex lg:justify-between justify-end items-center">

                                <div className="header__container__left lg:block md:hidden hidden">
                                    <div className="header__container__left__main flex ">
                                        <span className='text-lg mr-4 text-gray-600'><BsCalendar4></BsCalendar4></span>
                                        <span className='text-lg mr-4 text-gray-600'><BsChatLeft></BsChatLeft></span>
                                        <span className='text-xl mr-4 text-gray-600'><BsEnvelope></BsEnvelope></span>
                                        <span className='text-xl mr-4 text-gray-600'><BiSelectMultiple></BiSelectMultiple></span>
                                        <span className='text-xl mr-4 text-gray-600'><AiOutlineStar></AiOutlineStar></span>
                                    </div>
                                </div>
                                <div className="header__container__right">
                                    <div className="flex">
                                        <div className="avatar__name text-right mr-4">
                                            <h1 className='font-semibold text-base '>John Doe</h1>
                                            <p className='text-xs text-gray-500'>Admin</p>
                                        </div>
                                        <div className="avatar__main">
                                            <Menu placement="bottom-end">
                                                <MenuHandler>
                                                    <Avatar src={avatar} alt="avatar" variant="circular" />
                                                    {/* <Button variant="gradient">Open Menu</Button> */}
                                                </MenuHandler>
                                                <MenuList>
                                                    <MenuItem className='flex text-base items-center'><span className='mr-2'><BiUser></BiUser></span> Profile</MenuItem>
                                                    <MenuItem className='flex text-base items-center'><span className='mr-2'><BsEnvelope></BsEnvelope></span> Inbox</MenuItem>
                                                    <MenuItem className='flex text-base items-center'><span className='mr-2'><BiSelectMultiple></BiSelectMultiple></span> Task</MenuItem>
                                                    <MenuItem className='flex text-base items-center'><span className='mr-2'><BsChatLeft></BsChatLeft></span> Chat</MenuItem>
                                                    <MenuItem className='flex text-base items-center'><span className='mr-2'><HiOutlineLogout></HiOutlineLogout></span>Logout</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


    // <div className='bg-red-900'>

    //     <Outlet></Outlet>
    // </div>

};

export default Dashboard;