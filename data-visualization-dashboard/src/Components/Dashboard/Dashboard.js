import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../Assets/dashboard-visualization-logo.svg';
import { useState, useEffect } from "react";
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineBarChart, AiOutlineSetting } from 'react-icons/ai';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { BsCalendar4, BsChatLeft, BsSearch } from 'react-icons/bs';
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: <><BiHomeAlt ></BiHomeAlt></> },
        { title: "Inbox", src: <><BsChatLeft></BsChatLeft></> },
        { title: "Accounts", src: <><BiUser></BiUser></>, gap: true },
        { title: "Schedule ", src: <><BsCalendar4></BsCalendar4></> },
        { title: "Search", src: <><BsSearch></BsSearch></> },
        { title: "Analytics", src: <><AiOutlineBarChart></AiOutlineBarChart></> },
        // { title: "Files ", src: <><AiOutlineSetting></AiOutlineSetting></>, gap: true },
        { title: "Setting", src: <><AiOutlineSetting></AiOutlineSetting></> },
    ];
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );
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
                <Navbar className="max-w-full  py-2 px-4 lg:px-8 lg:py-4">
                    <div className="w-full flex items-center justify-between text-blue-gray-900">
                        <Typography
                            as="a"
                            href="#"
                            variant="small"
                            className="mr-4 cursor-pointer py-1.5 font-normal"
                        >
                            <span>Material Tailwind</span>
                        </Typography>
                        <div className="hidden lg:block">{navList}</div>
                        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                            <span>Buy Now</span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                    <MobileNav open={openNav}>
                        {navList}
                        <Button variant="gradient" size="sm" fullWidth className="mb-2">
                            <span>Buy Now</span>
                        </Button>
                    </MobileNav>
                </Navbar>
            </div>
        </div>
    );


    // <div className='bg-red-900'>

    //     <Outlet></Outlet>
    // </div>

};

export default Dashboard;