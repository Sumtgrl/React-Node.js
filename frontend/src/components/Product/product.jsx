import { useState } from "react"
import ProductData from "../../data.json"
import ProductItem from "./productItem"
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./product.css"

function NextBtn({ onClick }) {
    return (
        <button className="glide__arrow glide__arrow--right" onClick={onClick}>
            <i className="bi bi-chevron-right"></i>
        </button>
    );
}

NextBtn.propTypes = {
    onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
    return (
        <button className="glide__arrow glide__arrow--left" onClick={onClick}>
            <i className="bi bi-chevron-left"></i>
        </button>
    );
}

PrevBtn.propTypes = {
    onClick: PropTypes.func,
};


const Product = () => {
    const [product, setProduct] = useState(ProductData);
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextBtn></NextBtn>,
        prevArrow: <PrevBtn></PrevBtn>,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="products">
            <div className="container">
                <div className="section-title">
                    <h2>Featured Products</h2>
                    <p>Summer Collection New Morden Design</p>
                </div>
                <div className="product-wrapper product-carousel">
                    <Slider {...sliderSettings}>
                        {product.map((product) => (
                            <ProductItem productItem={product} key={product.id}></ProductItem>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Product
