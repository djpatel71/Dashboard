import React, { useState } from 'react';
import './Register.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import video from '../../Assets/video.mp4';
import logo from '../../Assets/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    username: '',
    password: '',
  });
  const navigateTo = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const errors = {
      email: '',
      username: '',
      password: '',
    };

    if (!email.trim()) {
      errors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!userName.trim()) {
      errors.username = 'Username is required.';
      isValid = false;
    } else if (!/^[a-zA-Z0-9_-]{3,16}$/.test(userName.trim())) {
      errors.username = 'Username must be between 3 to 16 characters and can only contain alphanumeric characters, underscores, and dashes.';
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = 'Password is required.';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const createUser = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    Axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: userName,
      Password: password,
    }).then(() => {
      navigateTo('/');
      setEmail('');
      setUserName('');
      setPassword('');
    });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Music Distribution Company</h2>
            <p>Connecting Artists to Audiences Worldwide</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={'/'}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className={`input flex ${error.email && 'error'}`}>
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              {error.email && <span className="error-message">{error.email}</span>}
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className={`input flex ${error.username && 'error'}`}>
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              {error.username && <span className="error-message">{error.username}</span>}
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className={`input flex ${error.password && 'error'}`}>
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              {error.password && <span className="error-message">{error.password}</span>}
            </div>

            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="#">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
