import { CONTESTLOADING, CONTESTSUCCESS, CONTESTERROR, POSTCONTEST } from "./actionType";

const initState = {
    data: {
        loading: false,
        data_contest: [],
        error: false,
    }

}

export const contestReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case CONTESTLOADING:
            return {
                ...state.data,
                data: {
                    ...state.data.data_contest,
                    loading: payload,
                }
            }
            case POSTCONTEST:
                return {
                    ...state,
                    data: {
                        ...state.data,
                        loading: false,
                        data_contest: [...state.data.data_contest, payload]
                    }
                }

        case CONTESTERROR:
            return {
                ...state.data,
                data: {
                    ...state.data.data_contest,
                    loading: false,
                    error: true
                }
            }

            case CONTESTSUCCESS:
                return {
                    ...state.data,
                    data: {
                        ...state.data.data_contest,
                        loading: false,
                        data_contest: payload
    
                    }
                }

        default:
            return {
                ...state
            }
    }

}