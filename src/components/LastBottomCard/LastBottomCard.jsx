import React from "react";

function LastCard(){
    return(
        <div class="card mt-3" style={{width: "100%"}}>
          <div class="card-body">
            <p style={{fontSize: "120%"}}>DEV runs on 100% open source code known as <a href="/" class="primary" style={{textDecoration: "none"}}>Forem.</a>
              Contribute to the codebase or host your own! <br/>             
              <span style={{fontWeight: "800"}}>Check these out! </span>👇</p>
            <ul>
              <li><a href="#" style={{textDecoration: "none", fontSize: "large"}}>Forem Repo</a> </li>
              <li><a href="#" style={{textDecoration: "none", fontSize: "large"}}>Self-Host Instructions</a></li>
            </ul>
          </div>
        </div>
    )
}

export default LastCard;