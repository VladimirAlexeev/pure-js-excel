import { TABLE_RESIZE } from './types';

// Pure function no side effects
export function rootReducer(state, action) {
  switch(action.type) {
    case TABLE_RESIZE:
      const prevState = state.colState || {}
      prevState[action.data.id] = action.data.value
      return {...state, colState: prevState} // id, value
    default: return state;
  }
}