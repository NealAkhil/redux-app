import React from 'react'
import render from '../../src/index'
import {store} from '../store/index'

const dispatchBtnAction = (amount, key) =>(e) =>{
    
    console.log(amount);
    console.log(key);
    store.dispatch(setMethod(amount, key));
    store.subscribe(render);
}
function setMethod(amt, key){
    if(key === 1){
        return {
            type: "DEPOSIT",
            amt: amt
        }
    }
    else{
        return{
            type:"WITHDRAW",
            amt: amt
        }
    }
}

export const Button1 =({amount,abc})=>
    <div className="mt-5">
      <button
        onClick={dispatchBtnAction(amount,abc)}
      >
        Deposit {amount}
      </button>
  </div>

export const Button2 =({amount,abc})=>
    <div className="mt-5">
      <button
        onClick={dispatchBtnAction(amount,abc)}
      >
       Withdraw {amount}
      </button>
  </div>
