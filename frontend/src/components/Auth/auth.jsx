import Footer from "../Layouts/Footer/footer"
import Header from "../Layouts/Header/header"
import Policy from "../Layouts/Policy/policy"
import Login from "./Login"
import Register from "./register"
import "./Auth.css"

const Auth = () => {
    return (
        <section className="account-page">
            <div className="container">
                <div className="account-wrapper">
                    <Login></Login>
                    <Register></Register>
                </div>
            </div>
        </section>
    )
}
export default Auth