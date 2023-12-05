import React from "react";
import './SignupLogin.css'
import Title from "../../components/assets/title.png";


const Signup = () => {
    return (
        <div className='backgrounddiv'>
             <div className='booktown_title'>
                <img src={Title} />
            </div>
            <div className='containerr'>
                <div className='header'>
                    Sign up
                </div>
                <div className='username'>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className='password'>
                    <input type="text" placeholder="Password" />
                </div>
                <div className='address'>
                <input type="text" placeholder="Address"/>
                </div>
                <div className='phone'>
                    <input type="text" placeholder="Phone number" />
                </div>
                <div className='signin_container'>
                    Already have an account?
                    <a href='' className='signin_link'>Sign in</a>
                </div>
                <div className='submit_registeration_login'>
                    <button type="submit" className="Submit">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Signup
