import React from 'react';
import ItemsContainer from './itemsContainer';

const Footer = () => {
    return <footer className='bg-main text-white'>
        <ItemsContainer />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 text-center align-text-bottom pt-2 text-gray-300 text-sm pb-3  bg-sky-950'>
            <span className='my-4'>@2023 Workbots. All rights reserved</span>
        </div>
    </footer>
};

export default Footer;