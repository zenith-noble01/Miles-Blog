import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="regwrapper">
            <div className="login">
                <div className="login__container">
                    <div className="loginRoute">
                        <p>Don't have an Account?</p>
                        <Link to="/register">Register</Link>
                    </div>
                    <div className="login__left">
                        <div className="container__left">
                            <p className="header__left">Welcome back on Miles</p>
                            <p className="header__content">Fight for that life that you deserve. Don't let anyone or anything take away from you. You only have one life, make it the best one.</p>
                        </div>
                    </div>
                    <div className="form__wrapper">
                        <form  className="loginForm">
                            <div className="email">
                                <label className="loginEmailBtn">Email</label>
                                <input type="text" className="loginInput" placeholder="Email Address"  />
                            </div>
                            <div className="email">
                                <label className="loginEmailBtn">Password</label>
                                <input type="password" className="loginInput" placeholder="Password" />
                            </div>
                            <p>By Signing up to Miles you agree to our Terms of Service and Privacy Policy</p>
                            <button className="loginBtn">Log In</button>
                        </form>
                        <div className="loginLoginBtn">
                            <div className="OR__Components">
                                <div className="lines">
                                    <div className="line"></div>
                                    <div className="or">OR</div>
                                </div>
                                <div className="components__buttons">
                                    <div className="button__google">
                                        <i class="fab fa-google"></i>
                                        <p>Google</p>
                                    </div>
                                    <div className="button__facebook">
                                        <i class="fab fa-facebook"></i>
                                        <p>Facebook</p>
                                    </div>
                                    <div className="button__github">
                                        <i class="fab fa-github"></i>
                                        <p>Github</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
