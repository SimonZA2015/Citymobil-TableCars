import React from "react";
import Sidebar from "./More/Sidebar/Sidebar";
import Sheet from "./More/Sheet/Sheet";

import style from './Content.module.css';

const Content = (props) => {

    return (
        <div className={style.body}>
            <Sidebar />
            <Sheet dispatch={props.dispatch} />
        </div>
    )
};

export default Content;