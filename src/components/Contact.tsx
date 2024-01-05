import Banner from "./common/Banner";
import ContactForm from "./common/contactForm";

const Contact = () => {
    return (
        <div className="contact-section">
            <Banner title="Contact" img_url="contact.jpg"/>
            <ContactForm />
        </div>
    );
}
export default Contact;