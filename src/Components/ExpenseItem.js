import React from 'react';
import {useTranslation} from "react-i18next";

const ExpenseItem = () => {
    const [t , i18n] = useTranslation();
    return (
        <div className={'expense-tracker-item'}>
            <span className={'expense-tracker-item-title'}>title</span>
            <span className={'expense-tracker-item-desc'}>desc</span>
            <span className={'expense-tracker-item-status'}>status</span>
            <span className={'expense-tracker-item-price'}>20000</span>
            <span className={'expense-tracker-item-icon'}><i className={'bi bi-trash3-fill'}></i> </span>
        </div>
    );
};

export default ExpenseItem;