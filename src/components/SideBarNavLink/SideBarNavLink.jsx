import React from "react";

function LeftBarNav(props) {
  const { list, key } = props;
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <a className="dropdown-item d-flex align-items-center" href="/">
              <img src={item.image} alt="home" style={{ width: "12%" }} />
              <h6 className="mb-0" key={key}>
                &nbsp;&nbsp;{item.title}
              </h6>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default LeftBarNav;
