import React from "react"
import Categories from "../components/Categories/categories"
import Product from "../components/Product/product"
import CampaignsSingle from "../components/Campaigns/campaignsSingle"

const ShopPage = () => {
    return (
        <React.Fragment>
            <Categories></Categories>
            <Product></Product>
            <CampaignsSingle></CampaignsSingle>
            <Product></Product>
        </React.Fragment>
    )
}
export default ShopPage