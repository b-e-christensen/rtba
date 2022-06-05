import React from "react";
import '../index.css';

export default function Login() {
    function toggleSignup() {
        console.log('sign up toggled')
        document.getElementById("login-toggle").style.backgroundColor = "#fff";
        document.getElementById("login-toggle").style.color = "#222";
        document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
        document.getElementById("signup-toggle").style.color = "#fff";
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "block";
    }

    function toggleLogin() {
        console.log('login toggled')
        document.getElementById("login-toggle").style.backgroundColor = "#57B846";
        document.getElementById("login-toggle").style.color = "#fff";
        document.getElementById("signup-toggle").style.backgroundColor = "#fff";
        document.getElementById("signup-toggle").style.color = "#222";
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
    }

    function login() {
        console.log('this is where you would login')
    }

    function signup() {
        console.log('this is where you would signup')
    }

    const styles = {
        header: {
            textAlign: 'center'
        }
    }


    return (

        <div>
            <h1 style={styles.header}>RTBA</h1>
            <div className="form-modal">

                <div className="form-toggle">
                    <button id="login-toggle" onClick={() => toggleLogin()}>log in</button>
                    <button id="signup-toggle" onClick={() => toggleSignup()}>sign up</button>
                </div>

                <div id="login-form">
                    <form>
                        <input type="text" placeholder="Enter email" />
                        <input type="password" placeholder="Enter password" />
                        <button type="button" className="btn login" onClick={() => login()}>login</button>
                    </form>
                </div>

                <div id="signup-form">
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <input type="text" placeholder="Choose username" />
                        <input type="password" placeholder="Create password" />
                        <button type="button" className="btn signup" onClick={() => signup()}>create account</button>
                    </form>
                </div>

            </div>
        </div>
    )
}