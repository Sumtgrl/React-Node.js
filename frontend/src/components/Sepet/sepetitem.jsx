import Proptypes from "prop-types"
import { useContext } from "react"
import { SepetContext } from "../../context/sepetprovider"

const SepetItem = ({cartItem}) => {
    const {removeToSepet} = useContext(SepetContext);
    return (
        <tr className="cart-item">
            <td></td>
            <td className="cart-image">
                <img src={cartItem.img.singleImage} alt="" />
                <i className="bi bi-x delete-cart" onClick={()=>removeToSepet(cartItem.id)}></i>
            </td>
            <td>{cartItem.name}</td>
            <td>${cartItem.price.newPrice.toFixed(2)}</td>
            <td className="product-quantity">{cartItem.quantity}</td>
            <td className="product-subtotal">${(cartItem.price.newPrice * cartItem.quantity).toFixed(2)}</td>
        </tr>
    )
}

export default SepetItem

SepetItem.propTypes = {
    cartItem: Proptypes.object,
    
};