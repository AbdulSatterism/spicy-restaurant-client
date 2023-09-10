import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';


const MenuCategory = ({ items, title, image }) => {

    return (
        <div className='pt-8'>
            {title && <Cover img={image} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16 px-8'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className='btn btn-outline border-0 border-b-4 mt-4 text-center'>Order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;