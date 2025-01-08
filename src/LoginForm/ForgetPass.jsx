import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from './login';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

export default function ForgetPass() {
    const [email, setEmail] = useState("");

    const handlePassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => alert("Password reset email sent successfully."))
            .catch((err) => console.log(err));
        setEmail("");
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg space-y-8">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Forgot Password</h1>

                <form onSubmit={handlePassword} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Send Mail
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link to="/signin" className="text-blue-500 text-sm">
                        Remember your password? Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}
