import { STUDENTLOAD, STUDENTSUCCESS, STUDENTERROR, STUDENTDELETE, GETSTUDENTDATA } from "./actionType";

export const studentLoad = (data) => ({ type: STUDENTLOAD, payload: data });
export const studentSuccess = (data) => ({ type: STUDENTSUCCESS, payload: data });
export const studentError = (data) => ({ type: STUDENTERROR, payload: data });
export const studentDelete = (data) => ({ type: STUDENTDELETE, payload: data });
export const getStudentData = (data) => ({ type: GETSTUDENTDATA, payload: data });