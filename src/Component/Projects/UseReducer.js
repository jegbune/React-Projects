import React, { useReducer } from 'react'

  const reducer =(state,action) => {
    switch(action.type){
      case 'buy_ingredients': return {money: state.money -10}
      case 'sell_a_meal': return {money: state.money -10}
      case 'celebrity_visit': return {money: state.money + 5000}
    }
     return state
    // if(action.type === 'buy_ingredients') return {money: state.money - 10};
    // if(action.type === 'sell_a_meal') return {money: state.money + 10};
  }

function UseReducer() {
  const initialState = {money: 100};
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={()=> dispatch({type:'buy_ingredients'})}>Shopping for veggies!</button>
        <button onClick={()=> dispatch({type:'sell_a_meal'})}>Serve a meal to the customer</button>
        <button onClick={()=> dispatch({type:'celebrity_visit'})}>Celebrity Visit</button>
      </div>
    </div>
  )
}

export default UseReducer
