import React from 'react';
//use dispatch is used to modiy values in the store
//useSelector is used to get values from the store
import{useDispatch} from 'react-redux';
import {login, logout} from "../features/user";

function Login() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() =>dispatch(login({name: "allan", age: 22, email: "allankiche18@gmail.com"}))}>Login</button>
        <button onClick={() =>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login