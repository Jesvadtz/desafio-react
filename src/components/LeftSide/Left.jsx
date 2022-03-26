import React from "react";
import CardLogin from "../CardLogin/CardLogin";
import SectionIcons from "../SectionIcons/SectionIcons";
import LeftBarNav from "../SideBarNavLink/SideBarNavLink";
import otherList from "../../Data/LeftNavList"
import list from "../../Data/LeftNavList"

function LeftSide() {
    return (
        <>
            <CardLogin />
            <LeftBarNav list={list} />
            <h5 style={{fontWeight:"bold"}}>Other</h5>
            <LeftBarNav list={otherList}/>
            <SectionIcons/>
        </>
    )
}

export default LeftSide;