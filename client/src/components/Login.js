import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "../styles/login.css"
import { useState } from "react"
import { userLogin } from '../redux/userSlice'

const Login = () => {
  const [login, setLogin] = useState({
    email:"",
    password:"",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="email" required="" placeholder='Email'
              onChange={(e) => setLogin({ ...login, email: e.target.value })} />

            <label>Email </label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" placeholder='password'
              onChange={(e) => setLogin({ ...login, password: e.target.value })} />

            <label>Password</label>
          </div>
          <Link onClick={() => { dispatch(userLogin(login))
          setTimeout(() => {
                navigate("/");
              }, 1000);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            Submit
          </Link><h5> you don't have an account
            <Link to="/"> Register now</Link>
          </h5>
        </form>
      </div>
    </div>
  )
}

export default Login