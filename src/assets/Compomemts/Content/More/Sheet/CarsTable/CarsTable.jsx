import React from "react";

import style from './CarsTable.module.css';

const CarsTable = (props) => {

    //берем магину
    return props.list.map((data1) => (
                <tr className={style.body} key={data1.mark + ' ' + data1.model}>
                    {props.tr.map(dataTop => {
                        //Прогоняем по тарифам машину
                        if (dataTop === 'Марка и модель') {
                            return (
                                <td key={'name_' + data1.mark + ' ' + data1.model} className={style.name}>
                                    {data1.mark + ' ' + data1.model}
                                </td>
                            )
                        }else {
                            //Есть ли тариф такой в массиве
                            if (data1.tariffs.hasOwnProperty(dataTop)) {
                                let i = data1.tariffs[dataTop].year
                                return (
                                    <td key={dataTop + '_' + data1.mark + ' ' + data1.model}>
                                        {i}
                                    </td>
                                )
                            }else {
                                return (
                                    <td key={dataTop + '_' + data1.mark + ' ' + data1.model}>
                                        {'-'}
                                    </td>
                                )
                            }
                        }
                    })}
                </tr>
            ))
};

export default CarsTable