import React, { useState } from 'react';
import loginImage from '../Assets/dashboard-login.gif';
import { Link } from "react-router-dom";
import { Card, CardBody, Input, Button } from "@material-tailwind/react";
import { BsGoogle } from 'react-icons/bs';
import logo from '../Assets/dashboard-visualization-logo.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setEmail(email);
        setPassword(password);

    }
    // console.log(password, email);
    return (
        <div className="login container max-w-screen-xl mx-auto h-screen flex items-center">
            <div className='logo__main py-4 absolute top-5'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
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
                            <form onSubmit={handleLoginSubmit}>
                                <div className='py-2'>
                                    <Input size="md" label="Email" type="email" name='email' required />
                                </div>
                                <div className="forgot__password text-right mb-1">
                                    <small className=''><Link to='/forgot-password'>Forgot Password?</Link></small>
                                </div>
                                <div className='pb-3'>
                                    <Input size="md" label="Password" type="password" name='password' />
                                </div>
                                <div className='py-2'>
                                    <Button className='font-medium' fullWidth color='Indigo' type="submit">Sign in</Button>
                                    {/* <Link to='/'></Link> */}
                                </div>
                            </form>
                            <div className="registration__btn my-2">
                                <p>New on our platform? <Link className='text-blue-500' to='/registration'>Create and account</Link> </p>
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

export default Login;