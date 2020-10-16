import axios from "axios";

// constants
const dataInicial = {
  array: [],
  success: false,
  message: "",
};

const GET_STUDENTS_SUCCES = "GET_STUDENTS_SUCCES";
const ERROR_GET_STUDENTS = "ERROR_GET_STUDENTS";

// Reducer
export default function studentsReducer(state = dataInicial, action) {
  switch (action.type) {
    case GET_STUDENTS_SUCCES:
      return {
        ...state,
        array: action.payload,
        success: action.success,
        message: action.message,
      };
    case ERROR_GET_STUDENTS:
      return {
        ...state,
        array: action.payload,
        success: action.success,
        message: action.message,
        error: action.err,
      };
    default:
      return state;
  }
}

// actions
export const getStudentsAction = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:5000/students");

    if (response.data.data.success === true) {
      dispatch({
        type: GET_STUDENTS_SUCCES,
        payload: response.data.data.estudiantes,
        success: response.data.data.success,
        message: response.data.data.message,
      });
    }
  } catch (err) {
    dispatch({
      type: ERROR_GET_STUDENTS,
      payload: [],
      success: false,
      message: "Error en la Petición",
      err,
    });
  }
};
