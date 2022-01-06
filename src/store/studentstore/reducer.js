import { STUDENTLOAD, STUDENTSUCCESS, STUDENTERROR, STUDENTDELETE, GETSTUDENTDATA } from "./actionType";

const initState = {
    data: {
        loading: false,
        studentData: [],
        error: false
    }
}

export const studentReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case STUDENTLOAD:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: payload
                }
            }

        case STUDENTSUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    studentData: [...state.data.studentData, payload]
                }
            }

        case GETSTUDENTDATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    studentData: payload
                }
            }

        case STUDENTERROR:
            return {
                ...state,
                data: {
                    ...state.data,
                    loading: false,
                    error: true
                }
            }
        case STUDENTDELETE:
            return {
                ...state,
                data: {
                    ...state.data,
                    studentData: state.data.studentData.filter((ele) => ele._id !== payload)
                }
            }
        default:
            return {
                ...state
            }

    }
}