import Proptypes from "prop-types"
import { SepetContext } from "../../context/sepetprovider"
import { useContext } from "react"
import "./productItem.css"
import { Link, useNavigate } from "react-router-dom"

const ProductItem = ({productItem}) => {
    const { cartItems,addToSepet } = useContext(SepetContext);
    const navigate = useNavigate();

    const filteredSepet = cartItems.find((cartItems) => cartItems.id === productItem.id);

    return (
        <div className="product-item glide__slide glide__slide--active">
            <div className="product-image">
                <a href="#">
                    <img src={productItem.img.singleImage} alt="" className="img1" />
                    <img src={productItem.img.thumbs[1]} alt="" className="img2" />
                </a>
            </div>
            <div className="product-info">
                <a href="$" className="product-title">{productItem.name}</a>
                <ul className="product-star">
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i className="bi bi-star-half"></i>
                    </li>
                </ul>
                <div className="product-prices">
                    <strong className="new-price">${productItem.price.newPrice.toFixed(2)}</strong>
                    <span className="old-price">${productItem.price.oldPrice.toFixed(2)}</span>
                </div>
                <span className="product-discount">-{productItem.discount}%</span>
                <div className="product-links">
                    <button className="add-to-cart" onClick={()=>addToSepet(productItem)} disabled={filteredSepet}>
                        <i className="bi bi-basket-fill"></i>
                    </button>
                    <button>
                        <i className="bi bi-heart-fill"></i>
                    </button>
                    <Link to={`product/${productItem.id}`} className="product-link">
                        <i className="bi bi-eye-fill"></i>
                    </Link>
                    <a href="#">
                        <i className="bi bi-share-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductItem

ProductItem.propTypes = {
    active: Proptypes.object,
    setCartItems: Proptypes.func
};