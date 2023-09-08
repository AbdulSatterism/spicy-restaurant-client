import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-black'>
            <div className='flex p-24 text-white space-x-2 justify-center items-center text-3xl'>
                <FaMobileAlt></FaMobileAlt>
                <div>
                    <h3 className='text-center'>01710426245 </h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;