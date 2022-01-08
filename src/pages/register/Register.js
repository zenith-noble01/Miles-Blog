import "./register.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="regwrapper">
            <div className="register">
                <div className="register__container">
                    <div className="loginRoute">
                        <p>Already have an Account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="register__left">
                        <div className="container__left">
                            <p className="header__left">Get Exclusive access to Miles</p>
                            <p className="header__content">Fight for that life that you deserve. Don't let anyone or anything take away from you. You only have one life, make it the best one.</p>
                        </div>
                    </div>
                    <div className="form__wrapper">
                        <form  className="registerForm">
                            <div className="email">
                                <label className="registerEmailBtn">Username</label>
                                <input type="text" className="registerInput" placeholder="Username" />
                            </div>
                            <div className="email">
                                <label className="registerEmailBtn">Email</label>
                                <input type="text" className="registerInput" placeholder="Email Address"  />
                            </div>
                            <div className="email">
                                <label className="registerEmailBtn">Password</label>
                                <input type="password" className="registerInput" placeholder="Password" />
                            </div>
                            <p>By Registerig In to Miles you agree to our Terms of Service and Privacy Policy</p>
                            <button className="registerBtn">Register</button>
                        </form>
                        <div className="registerRegisterBtn">
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
