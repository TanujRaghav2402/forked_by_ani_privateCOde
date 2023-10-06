import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { BLOG, REGISTER, ROOT } from "../../lib/route";

function LoginMain() {
  const navigate = useNavigate();
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");
    const clseBtn = document.getElementById("closeBtn");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
      clseBtn.style.color="red";
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
      clseBtn.style.color="white";
    });
  }, []);

  function multiTO(){
    navigate(REGISTER);
  }

  return (
    <Wrapper className='section'>
      <div className='container' id='container'>
      <Link to={ROOT}>
      <i class="fa fa-close" id="closeBtn" title="Close" style={{zIndex:"999",position:"absolute",right:"10px",top:"5px",fontSize:"24px",color:"white",cursor:"pointer"}}></i>
      </Link> 
      <div className='form-container sign-up-container'>
          <form action='#'>
            <h1>Create Account</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-google-plus-g'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='number' placeholder='Mobile No' />
            <input type='password' placeholder='Password' />
            <button onClick={multiTO}>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form action='#'>
            <h1>Sign in</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-google-plus-g'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <a href='#'>Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className='ghost' id='signIn'>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className='ghost' id='signUp'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default LoginMain;
const Wrapper = styled.section`
  box-sizing: border-box;
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    margin-top:5px;
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
  }

  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 5px 0;
    width: 100%;
    border-radius:12px;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .social-container {
    margin: 15px 0;
  }

  .social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
  @media screen and (max-width: 650px){
    form{
        padding:0px 10px;
    }
    .overlay-panel{
        padding:0px 10px;
    }
  }
`;
