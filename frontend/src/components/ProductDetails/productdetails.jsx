import React from 'react'
import "./ProductDetails.css"
import NavigationBar from './NavigationBar/navigationbar'
import Galery from './Galery/galery'
import Info from './Info/info'
import Tabs from './Tabs/tabs'
const ProductDetails = () => {
  return (
    <section className="single-product">
        <div className="container">
            <div className="single-product-wrapper">
                <div className="single-topbar">
                    <NavigationBar></NavigationBar>
                </div>
                <div className="single-content">
                    <main className="site-main">
                        <Galery></Galery>
                        <Info></Info>
                    </main>
                </div>
                <Tabs></Tabs>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails