import React from "react";

import style from './Refresh.module.css';

const Refresh = (props) => {

    return (
        <div className={style.body} onClick={props.onClick}>
            <h4>{'Обновить  🔁'}</h4>
        </div>
    )
};

export default Refresh;