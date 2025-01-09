import { useNavigate } from "react-router";


const Register = () => {
    const navigate = useNavigate();
 

    const handleRegister = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        const formData = {email, pass, role:'user'};
        console.log(formData);

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                navigate('/')
            }
        })        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">
        Provide your  username with valid email and password to register this application.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;