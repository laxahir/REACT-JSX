import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from './login';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/insta-logo.png'

const auth = getAuth(app);

export default function SignIn() {

    const navigate = useNavigate()

    const [input, setInput] = useState({
        email: "",
        password: "",
    })

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, input.email, input.password)
            .then(() => console.log("SignIn Successfully...."))
            .catch((err) => console.log(err))
        setInput({
            email: "",
            password: "",
        })
    }

    const gotoshowdata = () => {
        navigate("/showdata")
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg space-y-8">
                {/* Instagram logo */}
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Instagram Logo" className="h-17 w-32" />
                </div>

                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Sign In</h1>

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                        onClick={gotoshowdata}
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link to="/forget" className="text-blue-500 text-sm">
                        Forget Password
                    </Link>
                    <br />
                    <Link to="/signup" className="text-blue-500 text-sm mt-2">
                        Don't have an account? Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
