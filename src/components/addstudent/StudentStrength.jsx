import { useSelector } from "react-redux";
import "./studentstrength.css";


export const StudentStrength = () => {
    const { data: {studentData } } = useSelector(store => store.student)
 

    const dynamicBarBA = (education) => {
        const badata = studentData.filter((ele) => {
            if (ele.education === education) {
                return ele
            }
        })

        return [badata.length]
    }

    const dynamicBarBCOM = (education) => {
        const bcomdata = studentData.filter((ele) => {
            if (ele.education === education) {
                return ele
            }
        })

        if (bcomdata.length === 0) {
            return [5]

        } else {
            return [bcomdata.length]
        }

    }

    const [badata] = dynamicBarBA("BA");
    const [bcomdata] = dynamicBarBCOM("BCOM");
    const widthBA = badata;
    const widthBCOM = bcomdata * 5

    return (
        <>

            <div>
                BA
                <div style={{ width: `${widthBA}%` }} className="strength-student"></div>
            </div>
            <div>
                BCOM
                <div style={widthBCOM > widthBA ? { backgroundColor: "#42A5F5", width: `${widthBCOM}%` } : { backgroundColor: "#FF7043" }} className="strength-student"></div>
            </div>

            <div>
                BSC
                <div style={widthBCOM > widthBA ? { backgroundColor: "#42A5F5", width: `${widthBCOM}%` } : { backgroundColor: "#42A5F5" }} className="strength-student"></div>
            </div>

        </>
    )
} 