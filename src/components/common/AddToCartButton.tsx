import { useSelector, useDispatch } from 'react-redux'
import { addToCart ,increaseQty, decreaseQty } from '../../slices/cartSlice'

const AddToCartButton = (props:any)=> {
    const { id } = props;
    const dispatch = useDispatch()
    const styles = {
        inputGroupBtn: {
            backgroundColor: 'black',
            color: 'white'
        },
    }
    const cart = useSelector((state:any) => state.cartSlice.cart)
    const currentItem = cart.find((item:any) => item.id === id);
return (
<>
{ cart.length && currentItem ? (
        <div className="input-group">
            <span className="input-group-btn" style={styles.inputGroupBtn}>
                <button type="button" disabled={!currentItem.quantity} className="btn btn-default btn-number" onClick={() => dispatch(decreaseQty(id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                    </svg>              
                    </button>
            </span>
            <input type="text" className="form-control input-number" value={currentItem.quantity} min="1" max="10" disabled={true}/>
            <span className="input-group-btn" style={styles.inputGroupBtn}>
                <button type="button" disabled={currentItem.quantity == 10} className="btn btn-default btn-number" onClick={() => dispatch(increaseQty(id))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </button>
            </span>
        </div>
    ) : (
        <button style={styles.inputGroupBtn} type="button" className="btn btn-default" onClick={() => dispatch(addToCart(props))}>Add to Cart</button>
        )}
    </>
    )
}
export default AddToCartButton;