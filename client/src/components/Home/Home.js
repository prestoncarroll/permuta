import React from 'react';
import Navbar from '../Routing/Navbar';
import PayPeriod from '../PayPeriod/PayPeriod';
import Table from '../Table/Table';

const Home = () => {
    return (
        <div>
        <Navbar />
        <PayPeriod />
        <Table />
            
        </div>
    )
}

export default Home
