import React from "react";
import TopTable from "./TopTable/TopTable";
import Refresh from "./Refresh/Refresh";

import style from './Sheet.module.css';
import CarsTable from "./CarsTable/CarsTable";

const Sheet = (props) => {

    let listTop = []
    let listCars = []
    listTop = props.dispatch({type: 'GET-TOPTABLE'})
    listCars = props.dispatch({type: 'GET-CARSTABLE'})
    let isR = props.dispatch({type: 'GET-ISR'})
    console.log(listCars)

    return (
        <div className={style.body} >
            <table>
                <tbody>

                    {listTop ? <TopTable list={listTop} isR={isR} onName={() => props.dispatch({type: 'REVERSE'})} /> : <Refresh onClick={() => props.dispatch({type: 'UPDATE'})} />}
                    {listCars ? <CarsTable list={listCars} tr={listTop} /> : 'Обновите данные'}
                </tbody>
            </table>
        </div>
    )
};

export default Sheet;