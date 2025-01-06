import "./brands.css"
import BrandItems from "./brandsItem"
const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brand-list">
                    <BrandItems></BrandItems>
                    <BrandItems></BrandItems>
                    <BrandItems></BrandItems>
                    <BrandItems></BrandItems>
                    <BrandItems></BrandItems>
                </ul>
            </div>
        </section>
    )
}
export default Brands