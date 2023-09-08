import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';

const Featured = () => {
    return (
        <div className='featuredItem bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                subHeading={"check it out"}
                heading={"Feature Item"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, vel? Voluptatum similique vitae expedita nihil maxime ipsa itaque excepturi unde, quam consectetur iste est ipsam laboriosam maiores quidem assumenda blanditiis? Laudantium, et quod quis consequuntur, quia fugit nihil molestiae explicabo sit dignissimos odit assumenda ratione totam quasi necessitatibus. Ducimus, inventore?</p>

                    <ButtonComponent>Order now</ButtonComponent>
                </div>
            </div>
        </div>
    );
};

export default Featured;