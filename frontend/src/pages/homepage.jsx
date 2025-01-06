import React from 'react'
import Blog from "../components/Blog/blog"
import Brands from "../components/Brands/brands"
import Campaigns from "../components/Campaigns/campaigns"
import CampaignsSingle from "../components/Campaigns/campaignsSingle"
import Categories from "../components/Categories/categories"
import Product from "../components/Product/product"
import Slider from "../components/Slider/slider"

const HomePage = () => {
    return (
        <React.Fragment>
            <Slider></Slider>
            <Categories></Categories>
            <Product></Product>
            <Campaigns></Campaigns>
            <Product></Product>
            <Blog></Blog>
            <Brands></Brands>
            <CampaignsSingle></CampaignsSingle>
        </React.Fragment>
    )
}
export default HomePage