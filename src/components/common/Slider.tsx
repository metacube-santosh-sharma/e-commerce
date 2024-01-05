import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
    const sliderImages = [{image: "slider1.jpg", text: "New Colletion"}, {image: "slider2.jpg", text: "New Colletion"}, {image: "slider3.jpg", text: "New Colletion"}, {image: "slider4.jpg", text: "New Colletion"}];
    const renderSlides = sliderImages.map((image) =>
        <div>
            <img src={image.image} alt=""/>
            <p className="legend">{image.text}</p>
        </div>
        )
    return (
        <Carousel interval={2500} showThumbs={false} transitionTime={500} showArrows={true} autoPlay={true} infiniteLoop={true} showStatus={false} className="carousel-container">
            {renderSlides}    
        </Carousel>
    )

}
export default Slider;