import update from 'react-addons-update';
const ADD_TODO = 'ADD_TODO';
const GET_TODO = 'GET_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const ADD_LIKE = 'ADD_LIKE';
const DIS_LIKE = 'DIS_LIKE';
const TASK_DONE = 'TASK_DONE';
const TASK_UNDONE = 'TASK_UNDONE';
// Action funtion
export const addItem = (value) => ({type:ADD_TODO, value});


export const addLike = (id) => ({type:ADD_LIKE, id});
export const disLike = (id) => ({type:DIS_LIKE, id});

export default function ReducersTodos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
              state = [...state, {
                      id: state.length? state.length+1: 1,
                      text: action.value,
                      like: 0
                    }]
               return state
               break;
    case ADD_LIKE:
            state = state.map(todo => todo.id === action.id ? { ...todo, like: todo.like+1 } : todo)
            return state
            break;
    case DIS_LIKE:
            state = state.map(todo => todo.id === action.id ? { ...todo, like: todo.like-1 } : todo)
            return state
            break;
    default:
      return state
  }
}
