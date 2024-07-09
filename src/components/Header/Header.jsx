import { TbShoppingBagSearch , TbSearch, TbShoppingCart} from "react-icons/tb";
import "./Header.css";
import { useCart } from "../../context/CardContext";
import { Link } from 'react-router-dom'

const  Header = () => {
    const { cartItems } = useCart()
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">
                    <h2>Purri Shop</h2>
                    <TbShoppingBagSearch className="icon"/>
                </div>
            </Link>
            <div className="right-side">

                <Link to="/cart">
                    <div className="cart">
                        <TbShoppingCart className="cart-icon" />
                        <span>{cartItems.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header