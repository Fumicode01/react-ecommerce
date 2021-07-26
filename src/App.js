import React from "react";
import './App.css';
import {useDispatch,  useSelector } from "react-redux";
import {signInAction} from "./redux/users/actions";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  console.log(selector.users)
  return (
    <div className="App">
      <button onClick={()=>dispatch(signInAction({uid:"001", username:"mimi"}))}>Sign In</button>
    </div>
  );
}

export default App;
