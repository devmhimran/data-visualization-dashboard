import React from 'react';
import loginImage from '../Assets/registration.gif';
import { Link } from "react-router-dom";
import { Card, CardBody, Input, Button } from "@material-tailwind/react";
import { BsGoogle } from 'react-icons/bs';
import logo from '../Assets/dashboard-visualization-logo.svg';

const Registration = () => {
    return (
        <div className="registration container max-w-screen-xl mx-auto h-screen flex items-center">
            <div className='logo__main py-4 absolute top-2'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div class="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 ">
                <div class="lg:col-span-2 lg:block md:block hidden">
                    <div className='registration__image'>
                        <img className='lg:w-4/5 w-full' src={loginImage} alt="" />
                    </div>
                </div>
                <div className='container flex items-center'>
                    <Card className="w-full">
                        <CardBody className="text-center text-left">
                            <h1 className='text-xl font-semibold mb-3'>Adventure starts here</h1>
                            <p className='py-3'>Make your app management easy and fun!</p>
                            <div className='py-2'>
                                <Input size="md" label="Username" />
                            </div>
                            <div className='py-2'>
                                <Input size="md" label="Email" />
                            </div>
                            <div className='py-2'>
                                <Input size="md" label="Password" />
                            </div>
                            <div className='py-2'>
                                <Link to='/'><Button className='font-medium' fullWidth type color='Indigo'>Sign up</Button></Link>
                            </div>
                            <div className="registration__btn my-2">
                                <p>Already have an account? <Link className='text-blue-500' to='/login'>Sign in instead</Link> </p>
                            </div>
                            <div className="divider flex items-center">
                                <hr className='w-full items-center' />
                                <span className='mx-4'>or</span>
                                <hr className='w-full items-center' />
                            </div>
                            <div className="google-signin">
                                <Button className='font-medium' fullWidth variant="outlined"><BsGoogle className='inline mr-2'></BsGoogle> Google Sign in</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Registration;