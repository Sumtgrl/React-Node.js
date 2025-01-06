import { useContext, useState } from "react"
import { SepetContext } from "../../context/sepetprovider"

const SepetTotal = () => {
    const [fastCargoChecked,setFastCargoChecked] = useState(false);
    const {cartItems} = useContext(SepetContext);
    const cartItemTotal = cartItems.map((item)=> {
        const itemTotal = item.price.newPrice * item.quantity;
        return itemTotal;
    });
    const sumTotal = cartItemTotal.reduce((previousValue,currentValue)=> {
        return previousValue+currentValue;
    },0);

    return (
        <div className="cart-totals">
            <h2>Cart totals
            </h2>
            <table>
                <tbody>
                    <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                            <span id="subtotal">${sumTotal.toFixed(2)}</span>
                        </td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>
                            <ul>
                                <li>
                                    <label>
                                        Fast Cargo: $15.00
                                        <input type="checkbox" id="fast-cargo" checked={fastCargoChecked} onChange={()=> setFastCargoChecked(!fastCargoChecked)}/>
                                    </label>
                                </li>
                                <li>
                                    <a href="#">Change Address</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>
                            <strong id="cart-total">{fastCargoChecked === true ? (sumTotal + 15).toFixed(2):(sumTotal).toFixed(2)}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="checkout">
                <button className="btn btn-lg">Proceed to checkout</button>
            </div>
        </div>
    )
}

export default SepetTotal