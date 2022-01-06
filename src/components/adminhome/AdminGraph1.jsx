import { useSelector } from "react-redux";
import "./adminhome.css"
export const AdminGraph1 = () => {
    const { data: { studentData } } = useSelector(store => store.student);
    const { data: { data_contest } } = useSelector(store => store.contest);
   
    return (
        <>

            <div className="admin__graph1-parent">
                <div>Total Students
                    <div>{studentData.length}</div>
                </div>
                <div>Total Contests
                    <div>{data_contest.length}</div>
                </div>

                <div>Total Trainers
                    <div>13</div>
                </div>
            </div>

        </>
    )
}