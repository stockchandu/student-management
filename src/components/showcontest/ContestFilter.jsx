import { useState } from "react"
import "./contestfilter.css"
import axios from "axios";
import { useDispatch } from "react-redux";
import { baseURL } from "../utility/utility"
import { contestLoading, contestSuccess, contestError } from "../../store/conteststore/action";
export const ContestFilter = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: "",
        deadline: "",
        type: "",
        author: ""
    })


    const handleChange = (event) => {
        let { name, value } = event.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    let { title, deadline, type, author } = input;


    const handleFilter = async () => {
        dispatch(contestLoading(true));
        try {

            if (deadline) {
                let { data: { contestByDeadline } } = await axios.get(`${baseURL}/get_all_contest?deadline=${deadline}`)
                dispatch(contestSuccess(contestByDeadline));
            }

            else if(title){
                let { data: { contestByTitle } } = await axios.get(`${baseURL}/get_all_contest?title=${title}`)
                dispatch(contestSuccess(contestByTitle));
            }

            else if(author){
                let { data: { contestByAuthor } } = await axios.get(`${baseURL}/get_all_contest?author=${author}`)
                dispatch(contestSuccess(contestByAuthor));
            }

            else if(type){
                let { data: { contestByType } } = await axios.get(`${baseURL}/get_all_contest?type=${type}`)
                dispatch(contestSuccess(contestByType));
            }


        } catch (err) {
            dispatch(contestError(err));
        }
    }
    return (
        <>
            <div className="contest__filter-parent">

                <div className="filter__input-box">
                    <div>Title</div>
                    <input type="text" placeholder="Search by Title" name="title" onChange={handleChange} />
                </div>

                <div className="filter__input-box">
                    <div>Deadline</div>
                    <input type="date" name="deadline" onChange={handleChange} />
                </div>

                <div className="filter__input-box">
                    <div>Type</div>
                    <select name="type" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="coding">Coding</option>
                        <option value="dsa">DSA</option>
                    </select>
                </div>
                <div className="filter__input-box">
                    <div>Author</div>
                    <select name="author" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Nrupul">Nrupul</option>
                        <option value="Yogesh">Yogesh</option>
                        <option value="Venu">Venu</option>
                        <option value="Ankush">Ankush</option>
                        <option value="Lohit">Lohit</option>
                        <option value="Aman">Aman</option>
                        <option value="Dhaval">Dhaval</option>
                        <option value="Swanand">Swanand</option>
                        <option value="Prabhanjan">Prabhanjan</option>
                        <option value="Albert">Albert</option>
                        <option value="Shruthi">Shruthi</option>
                        <option value="Mythri">Mythri</option>
                        <option value="Isha">Isha</option>
                    </select>
                </div>

                <div className="filter__input-box" onClick={handleFilter}>
                    <button>Apply</button>
                </div>
            </div>
            <hr />
        </>
    )
}