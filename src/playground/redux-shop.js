import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//Action Generator.in this function we implicitly return the action object
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

//action generator for removing expenses

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// action generator for editing expense:

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//set text-filter

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});

//sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

//sort by date

const sortByDate = () => ({
  type: "SORT_BY_DATE",
});

//set start date
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

//set end date

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

//expense reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });

    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};
//filter reducer:

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) => {
return expenses.filter((expense) => {
    const startDateMatch = typeof startDate!== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
}), expenses.sort((a,b) => {
    if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy ==='amount'){
        return a.amount <b.amount ? 1 : -1

    }
})
}

//reducer creation :

const reducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});

//store creation 

const store = configureStore({
  reducer,
  
});


store.subscribe(() => {
    const state = store.getState();
    //console.log(state);
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    //console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 200,createdAt : -2000 })
);
//console.log(expenseOne);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "transportation", amount: 1200,createdAt : -1000 })
);

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter("ee"));
//store.dispatch(setTextFilter());
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

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

const user = {
  name: "zakia",
  age: 23,
};

console.log({ ...user, location: "fla" });
