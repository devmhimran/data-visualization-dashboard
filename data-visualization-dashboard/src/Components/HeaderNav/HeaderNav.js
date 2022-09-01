import React from 'react';
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
import { useState, useEffect } from "react";
import { BiHomeAlt, BiSelectMultiple, BiUser } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineBarChart, AiOutlineStar, AiOutlineSetting } from 'react-icons/ai';
import auth from '../firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const HeaderNav = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogout = () => {     
        signOut(auth);
      };
    return (
        <div className="header__nav w-auto ml-20 bg-white">
            <div className="card shadow rounded py-2 px-3 rounded">
                <div className="card-body ">
                    <div className="header__container__main flex lg:justify-between justify-end items-center">

                        <div className="header__container__left lg:block md:hidden hidden">
                            <div className="header__container__left__main flex ">
                                <span className='text-lg mr-4 text-gray-600 cursor-pointer'><BsCalendar4></BsCalendar4></span>
                                <span className='text-lg mr-4 text-gray-600 cursor-pointer'><BsChatLeft></BsChatLeft></span>
                                <span className='text-xl mr-4 text-gray-600 cursor-pointer'><BsEnvelope></BsEnvelope></span>
                                <span className='text-xl mr-4 text-gray-600 cursor-pointer'><BiSelectMultiple></BiSelectMultiple></span>
                                <span className='text-xl mr-4 text-gray-600 cursor-pointer'><AiOutlineStar></AiOutlineStar></span>
                            </div>
                        </div>
                        <div className="header__container__right">
                            <div className="flex items-center">
                                <div className="avatar__name text-right mr-4">
                                    <h1 className='font-semibold text-base '>{user.displayName}</h1>
                                    <p className='text-xs text-gray-500'>Admin</p>
                                </div>
                                <div className="avatar__main flex items-center">
                                    <Menu placement="bottom-end">
                                        <MenuHandler>
                                            <span className='p-1.5 rounded-full cursor-pointer border-2 border-indigo-600'>
                                                <BiUser className='text-2xl'></BiUser>
                                            </span>
                                            {/* <Avatar className='border-2 border-yellow-500' src={avatar} alt="avatar" variant="circular" /> */}
                                            {/* <Button variant="gradient">Open Menu</Button> */}
                                        </MenuHandler>
                                        <MenuList>
                                            <MenuItem className='flex text-base items-center'><span className='mr-2'><BiUser></BiUser></span> Profile</MenuItem>
                                            <MenuItem className='flex text-base items-center'><span className='mr-2'><BsEnvelope></BsEnvelope></span> Inbox</MenuItem>
                                            <MenuItem className='flex text-base items-center'><span className='mr-2'><BiSelectMultiple></BiSelectMultiple></span> Task</MenuItem>
                                            <MenuItem className='flex text-base items-center'><span className='mr-2'><BsChatLeft></BsChatLeft></span> Chat</MenuItem>
                                            <MenuItem className='flex text-base items-center'  onClick={handleLogout}><span className='mr-2'><HiOutlineLogout></HiOutlineLogout></span>Logout</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNav;