import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};


const removeExpense =({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state,
        action.expense
      ];
      case 'REMOVE_EXPENSE' :
        return state.filter((id) =>{
            return id !== action.id;
        })
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  expenses: expenseReducer,
  filters: filterReducer,
});

const store = configureStore({
  reducer,
});

store.subscribe( ()=> {
console.log(store.getState());
})


const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100 }));
const expenseTwo =store.dispatch(addExpense({ description: "Coffee", amount: 1000 }));
console.log(expenseOne);
store.dispatch(removeExpense({ id : expenseOne.expense.id}))



const demoState = {
  expenses: [
    {
      id: "biriany",
      description: "January Rent",
      note: "this was the final payment",
      amount: 50000,
    },
  ],

  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  },
};




