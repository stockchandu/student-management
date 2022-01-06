import { AdminSidebar } from "./AdminSidebar";
import { AdminGraph1 } from "./AdminGraph1";
import { AdminGraph2 } from "./AdminGraph2";
import "./adminhome.css";
import { useContext, useEffect } from "react";
import { liveUserData } from "../../context/LiveUser"
export const AdminHome = () => {

    const { live, liveUser } = useContext(liveUserData)

    useEffect(() => {
        liveUser(window.location.pathname)
    }, [])


    return (
        <>
            <div className="adminhome__parent">
                <div>
                    <AdminSidebar live={live}/>
                </div>
                <div>
                    <AdminGraph1 />
                    <AdminGraph2 />
                </div>
            </div>
        </>
    )
}