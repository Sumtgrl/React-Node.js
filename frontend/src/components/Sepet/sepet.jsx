import "./Sepet.css"
import SepetKupon from "./sepetkupon"
import SepetProgress from "./sepetprogress"
import SepetTable from "./sepettable"
import SepetTotal from "./sepettotal"

const Sepet = () => {
    return (
        <section className="cart-page">
            <div className="container">
                <div className="cart-page-wrapper">
                    <form className="cart-form">
                        <SepetProgress></SepetProgress>
                        <div className="shop-table-wrapper">
                            <SepetTable></SepetTable>
                            <SepetKupon></SepetKupon>
                        </div>
                    </form>
                    <div className="cart-collaterals">
                        <SepetTotal></SepetTotal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sepet