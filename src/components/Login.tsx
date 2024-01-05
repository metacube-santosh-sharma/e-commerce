import { useNavigate } from 'react-router-dom';
import '../scss/login.scss';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (formData:any)=>{
    console.log("formData", formData);
    if(formData.email == "admin@metacube.com" && formData.password == "admin") {
       toast.success("Login successful");
      navigate("home")
    } else {
      toast.error("Invalid credentials!");
    }
}

    return (
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="col-md-12 col-lg-12">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form onSubmit={handleSubmit((data) => submitForm(data))}>
                      <div className="form-floating mb-3">
                        <input {...register('email', { required: true })} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                        {errors.email && <p className='error'>Email is required.</p>}
                      </div>
                      <div className="form-floating mb-3">
                        <input {...register('password', { required: true })} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label>Password</label>
                        {errors.password && <p className='error'>Password is required.</p>}
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                        <label className="form-check-label">
                          Remember password
                        </label>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                        <div className="text-center">
                          <a className="small" href="/">Forgot password?</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Login;