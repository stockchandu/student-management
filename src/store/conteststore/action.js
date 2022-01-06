import { CONTESTLOADING, CONTESTSUCCESS, CONTESTERROR ,POSTCONTEST} from "./actionType";

export const contestLoading = (data) => ({ type: CONTESTLOADING, payload: data });
export const postContest = (data) => ({ type: POSTCONTEST, payload: data });
export const contestError = (data) => ({ type: CONTESTERROR, payload: data });
export const contestSuccess = (data) => ({ type: CONTESTSUCCESS, payload: data });

