import { Button } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import "./Login.css"
import {auth, provider, storage} from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from "./reducer"

function Login() {
    const [{user}, dispatch] = useStateValue();
    const [use, setUse] = useState(null)
    const [progress, setProgress] = useState(null)
    useEffect(() => {
        if (!user){
            signIn()
        } else {
            setUse(user)
        }
        
    }, [user])
    const signIn = () => {
        setProgress(true)
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
            // console.log(result.user);
        }).catch(error => alert(error.message))
        setProgress(false)
    }

    return (
        <div className="login">

            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1920px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                {progress ? "Sign in" : "Loading"}
                {/* Sign in */}
            </Button>
        </div>
    )
}

export default Login
