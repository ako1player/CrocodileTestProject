import { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () =>{
    const [newPassword, setNewPassword] = useState<string>("");
    const navigate = useNavigate();


    const handleChange = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(validator.isStrongPassword(newPassword,{
            minLength: 8, minLowercase: 1, minUppercase: 1,
            minNumbers: 1, minSymbols: 1,
        })){
            navigate('/success');
        } else{
            alert("Password must be a minimum of 8 characters and contain lowercase/uppercase/number/ and symbol")
        }
    }

    return(
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleChange} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1>Forgot Password</h1>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                    <input type="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </label>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    New Password:
                    <input type="password" required onChange={(e) => {setNewPassword(e.target.value)}} value={newPassword} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </label>
                <button type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Change</button>
            </form>
        </div>
    )
}

export default ForgotPassword;