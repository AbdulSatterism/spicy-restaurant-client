import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Spicy-Restaurant | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our menu"></Cover>
            {/* offered */}
            <SectionTitle subHeading="Don't miss" heading="Todays Offer"></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} image={dessertImg} title="dessert"></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} image={pizzaImg} title="pizza"></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} image={saladImg} title="salad"></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} image={soupImg} title="soup" ></MenuCategory>
        </div>
    );
};

export default Menu;