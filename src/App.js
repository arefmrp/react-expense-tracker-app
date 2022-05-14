import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.rtl.css'
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.min'
import './Assets/Css/App.css';
import './i18n'

import ExpenseItem from "./Components/ExpenseItem";
import {useTranslation} from "react-i18next";
import {connect} from "react-redux";
import {ADDITEMS,AddItems} from "./Redux/actions/actions";

function App(props) {
  const {t,i18n} = useTranslation();
   // const {inputTitle,setInputTitle} = useState('');
   // const {inputDesc,setInputDesc} = useState('');
   // const {inputPrice,setInputPrice} = useState('');
    let income=0 , expense , sum , counts;

   let main = 1 ;


  const onChangeValue = (num) => {
   let x = parseInt(num);
      main  = parseInt(num);

  }


  const getDataItem = (e)=>{
      e.preventDefault();
      let title = document.getElementById('title').value;
      let desc = document.getElementById('desc').value;
      let status = main;
      let price = document.getElementById('price').value;
      if (title && desc && status && price){
          props.addItems({title,desc,status,price:parseInt(price)})
      }else {
         alert('empty')
      }


      ///reset inputs ... ///
      document.getElementById('title').value = '';
      document.getElementById('desc').value = '';
      document.getElementById('price').value = '';
      main = 0


  }



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
                     <form onSubmit={(e)=>getDataItem(e)}>

                       <label for={'title'}>{t("inputTitle")} :</label>
                       <input className={'form-control '} id={'title'}></input>
                       <label for={'desc'}>{t("inputDesc")} :</label>
                       <input className={'form-control'} id={'desc'}></input>
                       <label for={'price'}>{t("inputPrice")} :</label>
                       <input className={'form-control'} id={'price'}></input>



                         <div id={'status'} className={'status'}>
                             <div className="form-check">
                                 <input className="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1" onClick={()=>onChangeValue(1)}  checked></input>
                                 <label className="form-check-label" htmlFor="flexRadioDefault1">
                                     {t("income")}
                                 </label>
                             </div>
                             <div className="form-check">
                                 <input className="form-check-input" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault2" onClick={()=>onChangeValue(2)}></input>
                                 <label className="form-check-label" htmlFor="flexRadioDefault2">
                                     {t("expense")}
                                 </label>
                             </div>
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
                                <span>{income}</span>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'expense-tracker-input-item'}>
                                <span>{t("expense")}</span>
                                <span>{expense}</span>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'expense-tracker-input-item'}>
                                <span>{t("sum")}</span>
                                <span>{sum}</span>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className={'expense-tracker-input-item'}>
                                <span>{t("counts")}</span>
                                <span>{counts}</span>
                            </div>
                        </div>

                    </div>
                 </div>
             </div>
         </div>
         <div className={'expense-tracker-items-box'}>
             <div className={'expense-tracker-items-box-header'}>{t('items')}</div>
             <div className={'expense-tracker-items-box-body'}>


                 {
                     props.items.length > 0 ? props.items.map(item=>{return <ExpenseItem id={item.id} title={item.title} desc={item.desc} status={item.status} price={item.price}></ExpenseItem>}):<p>{t("itemsEmpty")}</p>
                 }

             </div>
         </div>
         <div className={`${i18n.language==='fa'? "circle-fa":"circle"}`}></div>
         <div className={`${i18n.language==='fa'? "language-fa":"language"}`} onClick={()=>i18n.language ==='en'?i18n.changeLanguage('fa'):i18n.changeLanguage('en')}>{t("lang")}</div>


     </div>
    </div>
  );
}
const getStateToProps = (props)=>{
    return{
        items:props.items
    }

}
const mapStateToProps = (dispatch)=>{
    return{
        addItems:(val)=>dispatch(AddItems(val))
    }

}

export default connect(getStateToProps,mapStateToProps)(App);
