import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="loader__main text-center">
                <div class="sbl-circ-path"></div>
                <h1 className='text-2xl font-semibold'>Loading ...</h1>
            </div>
        </div>
    );
};

export default Loading;