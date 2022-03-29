import React from "react"

function LowerCardBot() {
    return (
        <div className="card" style={{ width: "100%" }}>
            <a href="/">
                <img src="/assets/img/wassu.jpeg" style={{width:"100%"}}/>
            </a>
            <div className="card-body">
                <a href="/" style={{textDecoration:"none"}} ><h5 style={{fontWeight:"bold"}} >I find your lack of merch disturbing</h5></a>
            </div>
        </div>
    )
}
export default LowerCardBot;