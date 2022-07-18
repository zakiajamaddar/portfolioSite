import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { v4 as uuidv4 } from "uuid";

//action generator
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});


const removeExpense = ({id} = {}) =>({
type : 'REMOVE_EXPENSE',
id
})

//Expense Reducer :

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    //console.log(action);
  switch (action.type) {

    case 'ADD_EXPENSE' :
        return [...state,
            action.expense];
            case 'REMOVE_EXPENSE' :
                return state.filter(({id}) => {
return id !==action.id
                })
    default:
      return state;
  }
};

//filters creation

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//store creation :

const reducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});

const store = configureStore({
  reducer,
});

store.subscribe(() => {
  console.log(store.getState());
});

//console.log(store.getState());

const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: "coffee", amount: 100 }));
console.log(expenseTwo);

store.dispatch(removeExpense({ id : expenseOne.expense.id }))
const demoState = {
  expenses: [
    {
      id: "albeny",
      description: "January Rent",
      note: "this was the final payment",
      amount: 50000,
      createdAt : 0
    },
  ],

  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};
