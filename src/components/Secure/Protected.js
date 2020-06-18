import React from 'react'
import {Redirect} from "react-router-dom"

export default function Protected(props) {
    const Compo = props.compo
    let token = localStorage.getItem("token")
    
    return (
        <div>
        {token ? <Compo /> : <Redirect to="/login" />}
        </div>
    )
}
