import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const submitForm = (formData:any)=>{
            console.log("formData", formData);
      }
    const styles = {
        contactForm: {
            width: '50%',
            margin: 'auto',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
        submitBtn: {
            height: '50px',
            paddingLeft: '20px',
            paddingRight: '20px'
        }

    }
    return (
        <div className="ec-contact-form">
            <form onSubmit={handleSubmit((data) => submitForm(data))}>
                <div className="contact-form" style={styles.contactForm}>
                    <div className="form-item">
                        <label className="form-label">Name</label>
                        <input {...register('name', { required: true })} type="text" className="form-control" placeholder="Name" />
                        {errors.name && <p className='error'>Name is required.</p>}
                    </div>
                    <div className="form-item">
                        <label className="form-label">Email</label>
                        <input {...register('email', { required: true })} type="email" className="form-control" placeholder="Email" />
                        {errors.email && <p className='error'>Email is required.</p>}
                    </div>
                    <div className="form-item">
                        <label className="form-label">Mobile Number</label>
                        <input  {...register('mobile_number', { required: true })} type="tel" className="form-control" placeholder="Mobile Number" />
                        {errors.mobile_number && <p className='error'>Mobile Number is required.</p>}
                    </div>
                    <div className="form-item">
                        <label className="form-label">Comment</label>
                        <textarea  {...register('comment', { required: true })} className="form-control" placeholder="Comment" rows={8} />
                        {errors.comment && <p className='error'>Comment is required.</p>}
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary" style={styles.submitBtn}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default ContactForm;