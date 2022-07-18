import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const cokeReducer = (state = { coke: 5 }, action) => {
    switch (action.type) {
      case "ADD":
        return {
          coke: state.coke + action.addVale,
        };
      case "MINUS":
        return {
          coke: state.coke - action.minusValue,
        };
      default:
        return state
    }
}

const customerReducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case "NEW":
      return {
        name: action.newName,
      };
    case "GONE":
      return {
        name: "",
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  drinks: cokeReducer,
  customer: customerReducer
});

const store = configureStore({
    reducer
})

store.dispatch({
  type: "ADD",
  addVale: 2
});

store.dispatch({
  type: "MINUS",
  minusValue: 9,
});



console.log(store.getState())