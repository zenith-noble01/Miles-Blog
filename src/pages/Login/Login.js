import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="Login">
            <form  className="loginForm">
                <div className="email">
                   <label className="loginEmailBtn">Email</label>
                   <input type="text" className="LoginInput" placeholder="Email Address" />
                </div>
                <div className="email">
                   <label className="loginEmailBtn">Password</label>
                   <input type="password" className="LoginInput" placeholder="Password" />
                </div>
                <button className="loginBtn">Login</button>
            </form>
            <div className="loginRegisterBtn">
                <p>Don't have account?</p>
                <Link to="/register">
                   <button className="loginRegBtn">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
