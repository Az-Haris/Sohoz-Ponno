import React from 'react';
import WhyChoose from '../components/Home/WhyChoose';
import Faq from '../components/Home/FAQ';
import Gallery from '../components/Home/Gallery';
import Review from '../components/Home/Review';
import Products from '../components/Home/Products';
import Help from '../components/Home/Help';
import OrderNow from '../components/Home/OrderNow';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    return (
        <div>
            <ScrollToTop/>
            <Products/>
            <WhyChoose/>
            {/* <Review/> */}
            <Faq/>
            {/* <Gallery/> */}
            <Help/>
            <OrderNow/>
        </div>
    );
};

export default Home;