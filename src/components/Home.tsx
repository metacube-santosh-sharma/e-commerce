import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Products from "./common/Products";
import Slider from "./common/Slider";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Products />
            <Footer />
        </div>
    );
};
export default Home;