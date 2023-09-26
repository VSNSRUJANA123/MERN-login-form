import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="signup-bg">
      <form className="signupform" onSubmit={handlesubmit}>
        <h1>Register Form</h1>
        <div>
          <label>Name</label>
          <input
            required
            type="name"
            id="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <button className="btn btn-success">Register</button>
        </div>
        <p>Already have an account</p>
        <Link to="/login" className="text-decoration-none">
          <div className="registerbtn ">
            <button className="btn btn-outline-success">login</button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Singup;
