import { useState } from "react";
import { useDispatch } from "react-redux";
import { studentLoad, studentSuccess, studentError } from "../../store/studentstore/action";
import axios from 'axios';
import "./studentform.css";
import { StudentList } from "./StudentList";
import { baseURL } from "../utility/utility";
export const StudentForm = () => {

    const dispatch = useDispatch();
    const [load, setLoad] = useState(false)
    const [input, setInput] = useState({
        name: "",
        city: "",
        age: "",
        education: "",
        gender: "",
        contact: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    const { name, city, age, education, gender, contact } = input;

    const handleSubmit = () => {
        if (!name || !city || !age || !education || !gender || !contact) {
            alert("Fill all the details of student")
            return false
        }
        try {
            setLoad(true)
            dispatch(studentLoad(true));
            axios.post(`${baseURL}/student_data`, {
                name, city, age, education, gender, contact
            }).then(({ data }) => {
                dispatch(studentSuccess(data));
                setLoad(false)
            })

        } catch (err) {
            dispatch(studentError(err));
        }
    }

 

    return (
        <>
            {/* <form onSubmit={}> */}

            <div className="main-parent">
                <div className="student-form-container" >
                    <div className="student__input">
                        <div>
                            <div>Student Name</div>
                            <input type="text" name="name" onChange={handleChange} placeholder="Enter Student Name" />
                        </div>

                        <div>
                            <div>Student City</div>
                            <input type="text" name="city" onChange={handleChange} placeholder="Enter Student City" />
                        </div>
                    </div>

                    <div className="student__input">
                        <div>
                            <div> Student Age</div>
                            <select name="age" onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                            </select>
                        </div>

                        <div>
                            <div>Student Education</div>
                            <select name="education" onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="BSC">BSC</option>
                                <option value="BA">BA</option>
                                <option value="BCOM">BCOM</option>
                            </select>
                        </div>
                    </div>
                    <div className="student__input">
                        <div>
                            <div>Student Gender</div>
                            <select name="gender" onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div>
                            <div>Student Contact</div>
                            <input type="text" name="contact" onChange={handleChange} placeholder="+91" />
                        </div>
                    </div>
                    <div className="student__btn">
                        <button onClick={handleSubmit}>{load ? "Adding..." : "ADD STUDENT"}</button>
                    </div>
                </div>

                <div className="student__list">

                    <div>
                        {/* <StudentStrength /> */}
                    </div>
                    <div>
                        <StudentList />
                    </div>

                </div>

            </div>
            {/* </form> */}

        </>
    )
}