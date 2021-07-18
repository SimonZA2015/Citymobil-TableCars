import React from "react";

import style from './TopTable.module.css';

const TopTable = (props) => {

    return (
        <tr className={style.body}>
            {props.list.map((data) => {

                    if (data === 'Марка и модель') {
                        return (
                            <th key={data} onClick={props.onName} >{data + (props.isR ? '⬆' : '⬇')}</th>
                        )
                    } else {
                        return (
                            <th key={data}>{data}</th>
                        )
                    }
                }
            )}
        </tr>
    )
};

export default TopTable;