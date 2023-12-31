import React, { useState } from 'react';
import { useParams } from 'react-router';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const deshi = menu.filter(item => item.category === 'deshi');

    return (
        <div>
            <Helmet>
                <title>Spicy-Restaurant | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Deshi Food</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab
                        items={salad}
                    ></OrderTab>
                    {/* <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                        {
                            salad.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div> */}
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={pizza}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={soup}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={dessert}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={drinks}
                    ></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab
                        items={deshi}
                    ></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;