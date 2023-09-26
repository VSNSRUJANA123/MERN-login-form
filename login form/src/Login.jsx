import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [invalid, setInvalid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //http:localhost:3001/register
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        } else if (result.data === "invalid") {
          setInvalid(true);
        } else {
          setInvalid(true);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup-bg">
      <form className="signupform" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div>
          <label>Email</label>
          <input
            required
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            required
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="registerbtn ">
          <button className="btn btn-success">Login</button>
        </div>
        {invalid && <h5>invalid</h5>}
        <p>create account</p>
        <Link to="/register" className="text-decoration-none">
          <div className="registerbtn ">
            <button className="btn btn-outline-success">register</button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
