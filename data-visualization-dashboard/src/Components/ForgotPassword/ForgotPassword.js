import React from 'react';
import {
    Card,
    CardBody,
    Input,
    Button,
} from "@material-tailwind/react";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import logo from '../Assets/dashboard-visualization-logo.svg'

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    let updatePasswordMsg;
    const handleResetPassword = async (e) => {
        e.preventDefault();
        const emailInput = e.target.email.value;
        await sendPasswordResetEmail(emailInput);
        await toast.success('Successfully Send!')
    }
    if (error) {
        updatePasswordMsg = error.message;
    }
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <Card className="w-1/3 p-5">
                <CardBody className="text-center">
                    <div className="reset__password__main border border-gray-300 rounded-xl p-6 bg-white border-dashed">
                        <div className="logo">
                        <img className=' mx-auto mb-4' src={logo} alt="" />
                        </div>
                        <div className="reset__password__heading">
                            <h2 className='text-xl font-bold mb-3'>Reset Password</h2>
                        </div>
                        <form onSubmit={handleResetPassword}>
                            <div className="email__input py-2">
                                <Input size="lg" label="Enter your email" required type='email' name='email' />
                            </div>
                            <div className="error__msg">
                                <small className='text-red-500'>{updatePasswordMsg}</small>
                            </div>
                            <div className='py-2'>
                                <Button className='font-medium' fullWidth type='submit'>Reset Password</Button>
                            </div>
                            <div className="py-2">
                                <Link to='/' className='flex items-center justify-center text-sm'><BsArrowLeft className='mr-2'></BsArrowLeft> Back to the home</Link>
                            </div>
                        </form>
                    </div>
                </CardBody>
            </Card>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default ForgotPassword;