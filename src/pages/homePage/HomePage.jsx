import React from 'react';
import Banner from '../../component/Banner';
import Stats from '../../component/Stats';
import TrendingApps from '../../component/TrendingApps';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default HomePage;