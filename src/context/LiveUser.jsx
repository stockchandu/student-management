
import { createContext, useState } from "react";

export const liveUserData = createContext();

export const LiveUserContext = ({ children }) => {
    const [live, setLive] = useState(0);

    const liveUser = (path) => {
        if (path) {
            setLive((prev) => {
                return prev + 1
            })
        }
    }

    // liveUser(window.location.pathname)
    return (
        <>
            <liveUserData.Provider value={{ live, liveUser }} >
                {children}
            </liveUserData.Provider>
        </>
    )

}