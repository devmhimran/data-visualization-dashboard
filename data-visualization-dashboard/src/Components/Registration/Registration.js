import React, { useState } from 'react';
import loginImage from '../Assets/registration.gif';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, CardBody, Input, Button } from "@material-tailwind/react";
import { BsGoogle } from 'react-icons/bs';
import logo from '../Assets/dashboard-visualization-logo.svg';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword,user,loading,signUpError] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [mainUser, userLoading, userError] = useAuthState(auth);
    const location = useLocation();
    let loginError;
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    
    if (signUpError) {
        loginError = error.message;
    }
    if(user){
        navigate(from, {replace:true});
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        const inputUsername = e.target.username.value;
        const inputEmail = e.target.email.value;
        const inputPassword = e.target.password.value;
        setUsername(inputUsername);
        setEmail(inputEmail);
        setPassword(inputPassword);
        await createUserWithEmailAndPassword(inputEmail, inputPassword);
        await updateProfile({ displayName: inputUsername});
        await sendEmailVerification();

    }

    return (
        <div className="registration container max-w-screen-xl mx-auto h-screen flex items-center">
            <div className='logo__main py-4 absolute top-2'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-4 ">
                <div className="lg:col-span-2 lg:block md:block hidden">
                    <div className='registration__image'>
                        <img className='lg:w-4/5 w-full' src={loginImage} alt="" />
                    </div>
                </div>
                <div className='container flex items-center'>
                    <Card className="w-full">
                        <CardBody className="text-center text-left">
                            <h1 className='text-xl font-semibold mb-3'>Adventure starts here</h1>
                            <p className='py-3'>Make your app management easy and fun!</p>
                            <form onSubmit={handleRegistration}>
                                <div className='py-2'>
                                    <Input size="md" label="Username" required name='username' />
                                </div>
                                <div className='py-2'>
                                    <Input size="md" label="Email" name='email' type='email'/>
                                </div>
                                <div className='py-2'>
                                    <Input size="md" label="Password" name='password' type='password'/>
                                </div>
                                <div className='py-2'>
                                    <Button className='font-medium' fullWidth type='submit'>Sign up</Button>
                                </div>
                            </form>
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