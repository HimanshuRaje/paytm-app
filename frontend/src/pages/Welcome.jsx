import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"

export const Welcome = ()=>{
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex justify-center items-center h-50">
                <div className="text-3xl font-bold text-center pt-20">
                    <h1>Welcome to the payTm app Developed by Himanshu</h1>
                </div>
            </div>
            <div className="pt-30">
                <div className="pl-150 pr-150">
                    <Button label={"signup"} onClick={function(){
                        navigate("/signup")
                    }}/>
                </div>
                <div className="pl-150 pr-150">
                    <Button label={"signin"} onClick={function(){
                        navigate("/signin")
                    }}/>
                </div>
            </div>
        </div>
    )
}