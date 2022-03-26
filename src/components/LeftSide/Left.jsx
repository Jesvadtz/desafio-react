import React from "react";
import "../LeftSide/Left.scss"
import CardLogin from "../CardLogin/CardLogin";
import SectionIcons from "../SectionIcons/SectionIcons";
import LeftBarNav from "../SideBarNavLink/SideBarNavLink";
import { list, otherList, hashtags } from "../../Data/LeftNavList"
import HashtagList from "../hashTagList/hashTagList";
import LowerCardBot from "../CardLeftBottom/CardLeftBottom";
import LastCard from "../LastBottomCard/LastBottomCard";

function LeftSide() {
    return (
        <>
            <CardLogin />
            <LeftBarNav list={list} />
            <h5 style={{ fontWeight: "bold" }}>Other</h5>
            <LeftBarNav list={otherList} />
            <HashtagList hashtags={hashtags} />
            <SectionIcons />
            <LowerCardBot/>
            <LastCard/>
        </>
    )
}

export default LeftSide;