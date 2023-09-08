import React from 'react';

const ButtonComponent = ({ children }) => {
    return (
        <div className='items-center justify-center text-center'>
            <button className='btn btn-outline border-0 border-b-4 mt-4 text-center'>{children}</button>
        </div>
    );
};

export default ButtonComponent;