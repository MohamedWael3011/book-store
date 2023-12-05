import React from "react";
import './SignupLogin.css';
import Title from "../../components/assets/title.png";
import BackGroundImg from "../../components/assets/signup_background.jpeg";

const Login = () => {
    return (
        <div className='backgrounddiv'>

            <div className='booktown_title'>
                <img src={Title} className='title_img' />
            </div>

            <div className='containerr'>
                <div className='header'>
                    Sign in
                </div>
                <div className='welcome'>
                    Welcome
                </div>
                <div className='username'>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className='password'>
                    <input type="text" placeholder="Password" />
                </div>
                <div className='forgot_password_remember_me'>
                    <a href='' className='forgot_password'>Forgot Password?</a>
                    <label className='checkbox_label'>
                        <input type="checkbox" name="remember_me" />   Check me
                    </label>
                </div>
                <div className='submit_registeration_login'>
                    <button type="submit" className="Submit">Login</button>
                </div>
                <div className='signup_container'>
                </div>
                <div className="signup_line">
                    <div className='w-[25%] h-[1%] bg-white mx-3'>
                    </div>
                    <a href=''>Sign Up</a>
                    <div className='w-[25%] h-[1%] bg-white mx-3'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
