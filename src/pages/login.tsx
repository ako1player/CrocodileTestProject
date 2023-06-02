import { useState } from "react";
import { useNavigate } from "react-router-dom";
const uname = "test123";
const pword = "Test123!";

// o Userid and/or Password is not blank otherwise an alert message stating issue. -> using required on each input

const Login = () =>{
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate();
    
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(username === uname && password === pword){
            // o Userid and Password is match to the mock Userid/password pop up a Confirm message - "login is authenticated"
            alert("Login is Authenticated");
        } else{
            // o Userid and/or Password does not match to then mocked Userid/password an alert message "Invalid userid/password"
            alert("Invalid username/password")
        }
    }
    return(
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-xl">Login Page</h1>
               <label className="block text-gray-700 text-sm font-bold mb-2">Username:
                    <input 
                    type="text" 
                    onChange={(e)=> setUsername(e.target.value)} 
                    value={username} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="test123"/>
               </label>
               <label className="block text-gray-700 text-sm font-bold mb-2">Password:
                    <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Test123!"
                    />
               </label>
               <div className="flex-row">
                <div>
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                </div>
                <div className="pt-2">
                    <button onClick={() => navigate("/forgotpassword")} className=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Forgot Password</button>
                </div>
               </div>
            </form>
        </div>
    )
}

export default Login;