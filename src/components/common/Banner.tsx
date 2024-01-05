const Banner = (props:any) => {
    return (
        <div className="ec-banner">
            <img src={props.img_url} alt=""/>
            <h1>{props.title}</h1>
        </div>
    );
}
export default Banner;