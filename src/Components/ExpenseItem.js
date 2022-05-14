import React from 'react';
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import {RemoveItems} from "../Redux/actions/actions";

const ExpenseItem = (props) => {
    const [t , i18n] = useTranslation();


    const removeDataItem = (id)=>{
        props.removeItem(id)
    }

    return (
        <div className={'expense-tracker-item'}>
            <span className={'expense-tracker-item-title'}>{props.title}</span>
            <span className={'expense-tracker-item-desc'}>{props.desc}</span>
            <span className={'expense-tracker-item-status'}>{props.status === 1?<span style={{color:"green"}}>{t("income")}</span>:<span style={{color:"red"}}>{t("expense")}</span>}</span>
            <span className={'expense-tracker-item-price'}>{props.price}</span>
            <span className={'expense-tracker-item-icon'} onClick={()=>removeDataItem(props.id)}><i className={'bi bi-trash3-fill'}></i> </span>
        </div>
    );
};
const mapStateToProps = (dispatch)=>{
   return{
       removeItem:(id)=>dispatch(RemoveItems(id))

   }
}

export default connect(null,mapStateToProps)(ExpenseItem);