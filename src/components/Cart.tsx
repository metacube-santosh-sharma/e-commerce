import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { useSelector } from "react-redux";
import AddToCartButton from "./common/AddToCartButton";

const Cart = () => {
    const cart = useSelector((state:any) => state.cartSlice.cart)
    return (
        <div>
            <Navbar />
                <div className='container product-list'>
                <div className='row'>
                    {cart.map((item:any)=>
                    <div className='col-md-12'>
                        <img src={item.img_url} className="cardImg" alt="..." style={{float: 'left', width: '30%'}}/>
                        <div className="desc" style={{float: 'right', width: '70%'}}>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.desc}</p>
                            <AddToCartButton label="Add to cart" {...item}/>
                        </div>
                    </div>
                    )}
                </div>
             </div>
            <Footer />
        </div>
    );
};
export default Cart;