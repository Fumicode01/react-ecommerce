import React from "react";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";

const Login = () =>{
    const dispatch = useDispatch()
    const selector =  useSelector(state => state)
    console.log(selector.router)

    return (
        <div>
            <h2>Login</h2>
            <button onClick={()=>dispatch(push("/"))}>
                Login
            </button>
        </div>
    )

}
export default Login