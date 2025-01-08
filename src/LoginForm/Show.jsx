import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { app } from './login';

const auth = getAuth(app);

export default function Show({ email }) {

    const handlelogOut = () => {
        signOut(auth).then(() => console.log("Signout Successfully...")).catch((err) => console.log(err));
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg space-y-8">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Data</h1>

                <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-700 mb-4">Email: {email}</h3>

                    <button
                        onClick={handlelogOut}
                        className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}
