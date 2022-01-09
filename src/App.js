import React from 'react'
import Count from './Count'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Count1 from './Count1';

 const intialState = {
   count :50
 }
function reducer(state = intialState, action){
  // return{
  //   // count :50 
  // }
  // return state;
  switch(action.type){
    case "INCREAMENT":
      return{
        count : state.count +1
      };
      case "DECREAMENT":
        return{
          count : state.count -1
        };
      default:
   return state;

  }

}

const store = createStore(reducer);
store.dispatch({ type:"INCREAMENT" });
store.dispatch({ type:"DECREAMENT" });


export default function App() {
  return (
      <Provider store={store}>
      <Count  />
      <Count1 />
      </Provider>
  )
}
