import React from 'react';
import loginImage from '../Assets/dashboard-login.gif';
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    Input,
    Button,
} from "@material-tailwind/react";
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div className="login container h-screen max-w-screen-xl items-center justify-center flex  mx-auto ">
            <div class="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 ">
                <div class="lg:col-span-2 lg:block md:block hidden">
                    <div className='login__image'>
                        <img className='lg:w-4/5 w-full' src={loginImage} alt="" />
                    </div>
                </div>
                <div className='container flex items-center'>
                    <Card className="w-full">
                        <CardBody className="text-center text-left">
                            <h1 className='text-xl font-semibold mb-3'>Welcome to Dashboard</h1>
                            <p className='py-3'>Please sign-in to your account and start the adventure</p>
                            <div className='py-2'>
                                <Input size="md" label="Email" />
                            </div>
                            <div className="forgot__password text-right mb-1">
                                <small className=''><Link to='/forgot-password'>Forgot Password?</Link></small>
                            </div>
                            <div className='pb-3'>
                                <Input size="md" label="Password" />
                            </div>
                            <div className='py-2'>
                                <Link to='/'><Button className='font-medium' fullWidth type color='Indigo'>Sign in</Button></Link>
                            </div>
                            <div className="registration__btn my-2">
                                <p>New on our platform? <Link className='text-blue-500' to='/registration'>Create and account</Link> </p>
                            </div>
                            <div className="divider flex items-center">
                                <hr className='w-full items-center' />
                                <span className='mx-4'>or</span>
                                <hr className='w-full items-center' />
                            </div>
                            <div className="google-signin">
                                <Button className='font-medium' fullWidth variant="outlined"><BsGoogle className='inline mr-2'></BsGoogle> Goolge Signin</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;