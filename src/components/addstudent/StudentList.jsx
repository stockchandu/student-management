import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios';
import "./studentlist.css";
import { sortIcon, tableStudent, deleteIcon, baseURL } from "../utility/utility"
import { studentLoad, getStudentData, studentError, studentDelete } from "../../store/studentstore/action";
import CircularProgress from '@mui/material/CircularProgress';
export const StudentList = () => {
    const dispatch = useDispatch();
    const { data: { loading, studentData } } = useSelector(store => store.student)
    const [sortName, setName] = useState("ascending_order");
    const [sortAge, setAge] = useState("ascending_order");

    useEffect(() => {
        getStudentList()
    }, [])


    const getStudentList = async () => {
        dispatch(studentLoad(true));
        try {
            let { data: { findStudentName } } = await axios.get(`${baseURL}/studentlist`)
            dispatch(getStudentData(findStudentName));

        } catch (err) {
            dispatch(studentError(err));
        }
    }

    const deleteStudent = async (id) => {
        dispatch(studentDelete(id));
        await axios.delete(`${baseURL}/studentlist/${id}`)
    }

    const sortStudentName = async () => {
        if (sortName === "ascending_order") {
            try {
                let { data: { StudentNameAscending } } = await axios.get(`${baseURL}/studentlist/filter?name=ascending_order`)
                dispatch(getStudentData(StudentNameAscending));

            } catch (err) {
                dispatch(studentError(err));
            }
            setName("descending_order")
        } else {
            try {
                let { data: { StudentNameDescending } } = await axios.get(`${baseURL}/studentlist/filter?name=descending_order`)
                dispatch(getStudentData(StudentNameDescending));

            } catch (err) {
                dispatch(studentError(err));
            }
            setName("ascending_order")
        }
    }

    const sortStudentAge = async () => {
        if (sortAge === "ascending_order") {
            try {
                let { data: { StudentAgeAscending } } = await axios.get(`${baseURL}/studentlist/filter?age=ascending_order`)
                dispatch(getStudentData(StudentAgeAscending));
            } catch (err) {
                dispatch(studentError(err));
            }
            setAge("descending_order");
        } else {
            try {
                let { data: { StudentAgeDescending } } = await axios.get(`${baseURL}/studentlist/filter?age=descending_order`)
                dispatch(getStudentData(StudentAgeDescending));

            } catch (err) {
                dispatch(studentError(err));
            }
            setAge("ascending_order")
        }
    }

    return (
        <>

            <div className="student-heading">
                <h4>Students Details</h4>
            </div>
            {/* <div className="search-student">
                <input type="text" placeholder="search student name"/>
            </div> */}
            <div className="student-table">
                <div onClick={sortStudentName}>{tableStudent.name} <img src={sortIcon} alt="" width="15" /> </div>
                <div>{tableStudent.education}<img src={sortIcon} alt="" width="15" /></div>
                <div onClick={sortStudentAge}>{tableStudent.age} <img src={sortIcon} alt="" width="15" />  </div>
                <div>{tableStudent.city}<img src={sortIcon} alt="" width="15" /></div>
                <div>{tableStudent.gender}<img src={sortIcon} alt="" width="15" /></div>
                <div>{tableStudent.mobile}<img src={sortIcon} alt="" width="15" /></div>
                <div>Remove Student</div>
            </div>


            {
                loading ? <div className="spinner-load">
                    <div><CircularProgress /></div>
                    <div>Loading...</div>
                </div> : studentData.map(({ name, _id, gender, education, contact, age, city }) => {
                    return (
                        <div className="student-table" key={_id}>
                            <div>{name}</div>
                            <div>{education}</div>
                            <div>{age}</div>
                            <div>{city}</div>
                            <div>{gender}</div>
                            <div>{contact}</div>
                            <div onClick={() => { deleteStudent(_id) }}> <img src={deleteIcon} alt="delete icon" width="20" /> </div>
                        </div>
                    )
                })

            }
        </>
    )
}