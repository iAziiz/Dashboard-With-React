import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashBoardLayouts from "../layouts/DashBoardLayoutrs";

function Login({setIsLoggedIn}) {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error,setErorr] = useState("")
    const navigate = useNavigate();

    const  HandleLogin = (e) => {
        e.preventDefault();

        if(email === 'azooza629@gmail.com' && password === '123'){
            setIsLoggedIn(true)
            navigate("/dashboard")
        }else {
            setErorr('Invaild Password')
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={HandleLogin} >
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>
                
            </div>
        </div>
    )
}
export default Login;