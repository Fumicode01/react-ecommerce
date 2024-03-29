import React,{useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import {TextInput, PrimaryButton} from '../components/Uikit'
import {signIn} from '../redux/users/operations'
import { push } from 'connected-react-router'
import '../assets/reset.css'
import '../assets/style.css'

const SignIn = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState(""),
              [password, setPassword] = useState("");

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
},[setEmail]);

const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
},[setPassword]);




    return (
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">Sign In</h2>
            <div className="module-spacer--medium" />
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
            <div className="module-spacer--medium" />
             <div className="center">
                 <PrimaryButton label={"Sign In"} onClick={()=> dispatch(signIn(email, password))} />
                <div className="module-spacer--medium" />
                <p onClick={() => dispatch(push('/signup'))}>Create New Account</p>
                <p onClick={() => dispatch(push('/signin/reset'))}>Foget Your Password?</p>

             </div>
        </div>
    )
}

export default SignIn

