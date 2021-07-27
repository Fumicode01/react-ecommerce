import React,{useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import {TextInput, PrimaryButton} from '../components/Uikit'
import {signUp} from '../redux/users/operations'
import '../assets/reset.css'
import '../assets/style.css'

const SignUp = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState(""),
              [email, setEmail] = useState(""),
              [password, setPassword] = useState(""),
              [confirmPassword, setConfirmPassword] = useState("");

    const inputUsername = useCallback((event) => {
            setUsername(event.target.value)
    },[setUsername]);

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
},[setEmail]);

const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
},[setPassword]);

const inputConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value)
},[setConfirmPassword]);


    return (
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">Sign Up New Account</h2>
            <div className="module-spacer--medium" />
            <TextInput
                            fullWidth={true}
                            label={"Username"}
                            multiline={false}
                            required={true}
                            rows={1}
                            value={username}
                            type={"text"}
                            onChange={inputUsername}
             />
             <TextInput
                            fullWidth={true}
                            label={"Email"}
                            multiline={false}
                            required={true}
                            rows={1}
                            value={email}
                            type={"email"}
                            onChange={inputEmail}
             />
             <TextInput
                            fullWidth={true}
                            label={"Password"}
                            multiline={false}
                            required={true}
                            rows={1}
                            value={password}
                            type={"password"}
                            onChange={inputPassword}
             />
             <TextInput
                            fullWidth={true}
                            label={"Confirm Password"}
                            multiline={false}
                            required={true}
                            rows={1}
                            value={confirmPassword}
                            type={"password"}
                            onChange={inputConfirmPassword}
             />
             <div className="center">
                 <PrimaryButton label={"Create Account"} onClick={()=> dispatch(signUp(username, email, password, confirmPassword))} />
             </div>
        </div>
    )
}

export default SignUp

