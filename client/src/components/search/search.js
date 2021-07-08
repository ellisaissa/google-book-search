import React from 'react'
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "#332b5e", color: "white", marginBottom: "15px"}}>Search</button>
    )
}