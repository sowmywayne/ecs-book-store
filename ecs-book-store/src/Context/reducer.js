import {ADD, REMOVE, CHECKOUT} from "./actions.type"

export default (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload]
    case REMOVE:
      return state.filter(bookID => bookID !== action.payload)  
    case CHECKOUT:
      return []  
    default:
      return state
  }
}