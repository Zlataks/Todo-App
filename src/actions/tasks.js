import axios from 'axios'

export const fetchTasksSuccess = tasks => {
    return {
      type: 'FETCH_TASKS_SUCCESS',
      payload: tasks
    }
}
  
export const fetchTasksFailure = error => {
    return {
      type: 'FETCH_TASKS_FAILURE',
      payload: error
    }
}

export const fetchTasks = () => {
  return function (dispatch) {
    axios
      .get('https://todo-be-production.up.railway.app/tasks')
      .then(response => {
        console.log(response);
        const tasks = response.data;
          dispatch(fetchTasksSuccess(tasks))
      })
      .catch(error => {
        dispatch(fetchTasksFailure(error))
      })
  }
} 