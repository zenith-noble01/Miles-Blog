import "./register.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="register">
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
                <button className="registerBtn">Register</button>
            </form>
            <div className="registerRegisterBtn">
                <p>Already have account?</p>
                <Link to="/login">
                   <button className="registerRegBtn">Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Login
