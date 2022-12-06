const initialState = {
    tasks: [],
    errorMessage: null
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_SUCCESS':
        return {
          ...state,
          tasks: action.payload,
          errorMessage: null
        }
      case 'FETCH_TASKS_FAILURE':
        return {
          ...state,
          tasks: [],
          errorMessage: action.payload
        }
      default:
        return state
    }
}
