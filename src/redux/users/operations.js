import {signInAction} from "./actions"
import {push} from 'connected-react-router'
import {auth, db, FirebaseTimestamp} from '../../firebase/index'


export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) =>{
        //Validation
        if (username === "" || email === "" || password === "" || confirmPassword === ""){
            alert ("Please fill in the form.")
            return false
        }
        if(password !== confirmPassword){
            alert ("Your password and confirm password do not match.")
            return false
        }

        return auth.createUserWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user
            if(user){
                const uid = user.uid;
                const timestamp = FirebaseTimestamp.now();

                const userInitialData = {
                    // customer_id: "",
                    created_at: timestamp,
                    email: email,
                    role: "customer",
                    // payment_method_id: "",
                    uid: uid,
                    updated_at: timestamp,
                    username: username
                }
                db.collection('users').doc(uid).set(userInitialData)
                .then(()=>{
                    dispatch(push('/'))
                })
            }
        })
    }
}