import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { llistenAuthState } from './redux/users/operations';
import { getIsSignedIn } from './redux/users/selector';

const Auth = ({children}) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) =>state);
    const isSignedIn = getIsSignedIn(selector);

    useEffect(() => {
        if(!isSignedIn){
            dispatch(llistenAuthState())
        }
    }, []);

    if(!isSignedIn){
        return <></>
    } else {
        return children
    }
    
}
export default Auth;