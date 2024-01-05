import '../../scss/products.scss';
import AddToCartButton from './AddToCartButton';

const Products = () => {
    const products = [
        {id:1, name: "Product 1", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img1.jpg", quantity: 0},
        {id:2, name: "Product 2", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img2.jpg", quantity: 0},
        {id:3, name: "Product 3", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img3.jpg", quantity: 0},
        {id:4, name: "Product 4", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img4.jpg", quantity: 0},
        {id:5, name: "Product 5", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img5.jpg", quantity: 0}, 
        {id:1, name: "Product 1", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img1.jpg", quantity: 0},
        {id:2, name: "Product 2", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img2.jpg", quantity: 0},
        {id:3, name: "Product 3", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img3.jpg", quantity: 0},
        {id:4, name: "Product 4", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img4.jpg", quantity: 0},
        {id:5, name: "Product 5", desc: "Some quick example text to build on the card title and make up the bulk of the card's content.", img_url: "img5.jpg", quantity: 0},
    ]
    return (
        <div className='container product-list'>
            <div className='row'>
                {products.map((item)=>
                <div className='col-md-3'>
                    <div className="card">
                        <img src={item.img_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.desc}</p>
                            <AddToCartButton label="Add to cart" {...item}/>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
        );
}
export default Products;