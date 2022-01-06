import { useSelector } from "react-redux";
import { useState, useEffect } from "react"


import "./adminhome.css"
export const AdminGraph2 = () => {

    const [bcom, setBcom] = useState([])

    const { data: { studentData } } = useSelector(store => store.student);


    useEffect(() => {
        let bcomData = studentData.filter((ele) => {
            if (ele.education === "BCOM") {
                return ele
            }
        })

        setBcom([...bcom, bcomData])
    }, [studentData])


    return (
        <>
            <div className="admin__graph2-parent">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="admin__graph2-category">
                <div>BCOM</div>
                <div>BSC</div>
                <div>BA</div>
            </div>
        </>
    )
}