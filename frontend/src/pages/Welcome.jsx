import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const Welcome = ()=>{
    const navigate = useNavigate()
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <div className="text-center mt-20">
                <h1 className="text-4xl font-bold text-gray-800">
                Welcome to the PayTm App
                </h1>
                <p className="text-lg text-gray-600 mt-2">Developed by Himanshu</p>
            </div>

            <div className="mt-16 space-y-4 w-full max-w-xs px-4">
                <Button
                label={"Signup"}
                onClick={() => navigate("/signup")}
                className="w-full"
                />
                <Button
                label={"Signin"}
                onClick={() => navigate("/signin")}
                className="w-full"
                />
            </div>
        </div>
    )
}