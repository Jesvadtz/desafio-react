import React from "react";

function LeftBarNav(props) {
    const {list} = props
    return (
        <ul>
            {list.map((item) => {
                return (
                    <li>
                        <a class="dropdown-item d-flex align-items-center" href="/">
                            <img src={item.image} alt="home" style={{ width: "12%" }} />
                            <h6 class="mb-0">&nbsp;&nbsp;{item.title}</h6>
                        </a>
                    </li>)
            })}
        </ul>
    )
}

export default LeftBarNav;