import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Input, Alert } from "antd";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && (
            <Alert message="Qaytadan urinib koring!" type="error" showIcon />
          )}
        </form>
        <p
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
          }}
        >
          You do have an account?{" "}
          <Link style={{ color: "blue" }} to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
