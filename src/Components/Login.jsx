import React,{useState, useEffect} from 'react'

export default function Login(){

    return(
        <>
        
        <div className=" mx-auto bg-gray-500">
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg w-1/4">
                    <h1 className="text-3xl font-bold text-center">Login</h1>
                    <form className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" name="password" id="password" placeholder="Your Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div className="mb-4 flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-1/3 focus:shadow-outline" type="button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}