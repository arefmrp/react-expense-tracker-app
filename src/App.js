import React from "react";
import 'bootstrap/dist/css/bootstrap.rtl.css'
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.min'
import './App.css';

import ExpenseItem from "./Components/ExpenseItem";

function App() {


  return (
    <div className="App"  >
     <div className={'expense-tracker-section'} >
         <div className={'expense-tracker-header'}>
             <h1 className={'h1-one'}>EXPENSE<h1 className={'h1-two'}>TRACKER APP</h1></h1>
             <p>this app for write expense and income costs and save your money</p>
         </div>
         <div className={'expense-tracker-input'}>
             <div>
                 <a className="expense-tracker-input-link" data-bs-toggle="collapse" href="#collapseExample" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                     <span>Add Expense Or Income ...</span>
                     <span className={'collapse-icons'}><i className={'bi bi-chevron-down'}></i></span>
                 </a>
             </div>
             <div className="collapse" id="collapseExample">
                 <div className="card card-body">
                     <form>

                       <label for={'title'}>Title :</label>
                       <input className={'form-control '} id={'title'}></input>
                       <label for={'desc'}>Description :</label>
                       <input className={'form-control'} id={'dec'}></input>

                         <div className="form-check">
                             <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1"></input>
                                 <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Income
                                 </label>
                         </div>
                         <div className="form-check">
                             <input className="form-check-input" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault2" checked></input>
                                 <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Expense
                                 </label>
                         </div>



                       <button type="submit" className="btn-cs">Submit</button>
                     </form>
                 </div>
             </div>
         </div>

         <div className={'expense-tracker-counts'}>
             <div>
                 <a className="expense-tracker-counts-link" data-bs-toggle="collapse" href="#collapseExample2"
                    role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                     <span>Counts & Results ...</span>
                     <span className={'collapse-icons'}><i className={'bi bi-chevron-down'}></i></span>
                 </a>
             </div>
             <div className="collapse" id="collapseExample2">
                 <div className="card card-body">
                    <div className={'row'}>
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
             <div className={'expense-tracker-items-box-header'}>Expense Box Items ...</div>
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
         <div className={'circle'}></div>
     </div>
    </div>
  );
}

export default App;
