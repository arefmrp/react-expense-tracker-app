import React from "react";
import 'bootstrap/dist/css/bootstrap.rtl.css'
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.min'
import './Assets/Css/App.css';
import './i18n'

import ExpenseItem from "./Components/ExpenseItem";
import {useTranslation} from "react-i18next";

function App() {
  const {t,i18n} = useTranslation();


  return (
    <div className="App" style={{direction:i18n.language==='fa'? "rtl":"ltr"}}>
     <div className={'expense-tracker-section'} >
         <div className={'expense-tracker-header'}>
             {i18n.language ==='en'?<h1 className={'h1-one'}>EXPENSE<h1 className={'h1-two'}>TRACKER APP</h1></h1>:<h1 className={'h1-one'}>برنامه<h1 className={'h1-two'}>درامد و هزینه</h1></h1>}
             <p>{t("desc")}</p>
         </div>
         <div className={'expense-tracker-input'}>
             <div>
                 <a className="expense-tracker-input-link" data-bs-toggle="collapse" href="#collapseExample" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                     <span>{t("inputSection")}</span>
                     <span className={'collapse-icons'}><i className={'bi bi-chevron-down'}></i></span>
                 </a>
             </div>
             <div className="collapse" id="collapseExample">
                 <div className="card card-body">
                     <form>

                       <label for={'title'}>{t("inputTitle")} :</label>
                       <input className={'form-control '} id={'title'}></input>
                       <label for={'desc'}>{t("inputDesc")} :</label>
                       <input className={'form-control'} id={'dec'}></input>

                         <div className="form-check">
                             <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"></input>
                                 <label className="form-check-label" htmlFor="flexRadioDefault1">
                                     {t("income")}
                                 </label>
                         </div>
                         <div className="form-check">
                             <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked></input>
                                 <label className="form-check-label" htmlFor="flexRadioDefault2">
                                     {t("expense")}
                                 </label>
                         </div>



                       <button type="submit" className="btn-cs">{t("submit")}</button>
                     </form>
                 </div>
             </div>
         </div>
         <div className={'expense-tracker-counts'}>
             <div>
                 <a className="expense-tracker-counts-link" data-bs-toggle="collapse" href="#collapseExample2"
                    role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                     <span>{t("countsSection")}</span>
                     <span className={'collapse-icons'}><i className={'bi bi-chevron-down'}></i></span>
                 </a>
             </div>
             <div className="collapse" id="collapseExample2">
                 <div className="card card-body">
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <div className={'expense-tracker-input-item'}>
                                <span>{t("income")}</span>
                                <span>12$</span>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'expense-tracker-input-item'}>
                                <span>{t("expense")}</span>
                                <span>12$</span>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'expense-tracker-input-item'}>
                                <span>Income</span>
                                <span>12$</span>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'expense-tracker-input-item'}>
                                <span>Income</span>
                                <span>12$</span>
                            </div>
                        </div>

                    </div>
                 </div>
             </div>
         </div>
         <div className={'expense-tracker-items-box'}>
             <div className={'expense-tracker-items-box-header'}>{t('items')}</div>
             <div className={'expense-tracker-items-box-body'}>
                 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>

 <ExpenseItem></ExpenseItem>


             </div>
         </div>
         <div className={`${i18n.language==='fa'? "circle-fa":"circle"}`}></div>
         <div className={`${i18n.language==='fa'? "language-fa":"language"}`} onClick={()=>i18n.language ==='en'?i18n.changeLanguage('fa'):i18n.changeLanguage('en')}>{t("lang")}</div>


     </div>
    </div>
  );
}

export default App;
