import React, { useEffect, useState } from 'react';
import './Login.css';
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios'
import video from '../../Assets/video.mp4'
import logo from '../../Assets/logo.png'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
  const [loginState, setLoginState] = useState({
    username: '',
    password: '',
    status: '',
    showMessage: false,
  });
  const navigateTo = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    if (loginState.username === '' || loginState.password === '') {
      setLoginState({...loginState, status: 'Please enter both username and password.', showMessage: true });
    } else {
      Axios.post('http://localhost:3002/login', {
        LoginUserName: loginState.username,
        LoginPassword: loginState.password,
      }).then((response) => {
        if (response.data.message) {
          navigateTo('/')
          setLoginState({...loginState, status: 'Invalid credentials. Please try again.', showMessage: true });
        } else {
          navigateTo('/dashboard')
        }
      })
    }
  }

  useEffect(() => {
    if (loginState.showMessage) {
      setTimeout(() => {
        setLoginState({...loginState, showMessage: false, status: '' });
      }, 2000);
    }
  }, [loginState]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginState({...loginState, [name]: value });
  }

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Music Distribution Company</h2>
            <p>Connecting Artists to Audiences Worldwide!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={'/register'}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid">
            {loginState.showMessage && (
              <span className="error-message">{loginState.status}</span>
            )}

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id='username' name="username" placeholder='Enter Username'
                  value={loginState.username} onChange={handleInputChange} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" id='password' name="password" placeholder='Enter Password' 
                  value={loginState.password} onChange={handleInputChange} />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login;
