import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { contestLoading, contestSuccess, contestError } from "../../store/conteststore/action";
import axios from 'axios';
import "./showcontest.css"
import CircularProgress from '@mui/material/CircularProgress';
import { Pagination } from "./Pagination"
import { baseURL } from "../utility/utility"
export const ShowContest = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1)
    const { data: { data_contest, loading } } = useSelector(store => store.contest);

    useEffect(() => {
        getStudentList()
    }, [page])

    const getStudentList = async () => {
        dispatch(contestLoading(true));
        try {
            let { data: { allContest } } = await axios.get(`${baseURL}/get_all_contest?page=${page}&limit=5`)
            dispatch(contestSuccess(allContest));

        } catch (err) {
            dispatch(contestError(err));
        }
    }
    return (
        <>
            <div className="contest-parent">
                {
                    loading ? <div className="spinner-load">
                        <div><CircularProgress /></div>
                        <div>Loading...</div>
                    </div>

                        : data_contest.map(({ deadline, author, _id, title, tags, time, type }) => {
                            return (
                                <>
                                    <div key={_id} className="show__contest">
                                        <div>
                                            Evaluation-{title}
                                        </div>

                                        <div>
                                            <div>Deadline-{deadline}</div>
                                            <div>Time-{time}</div>
                                            <div>Type-{type}</div>
                                            <div>Tags-{tags}</div>
                                            <div>Author-{author}</div>
                                        </div>
                                        <div>

                                            <button>ATTEMPT</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })

                }

                {loading ? null :
                    <Pagination setpage={setPage} page={page} />
                }

            </div>
        </>
    )
}