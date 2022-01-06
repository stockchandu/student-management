import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useState } from "react";
import "./navbar.css";
import { useHistory, useLocation } from "react-router-dom";
import { Sidebar } from "../sidebar/Sidebar";
export const Navbar = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [showProfile, setProfile] = useState(false);
    const [showSidebar, setSidebar] = useState("none");

    let data = localStorage.getItem("token");
    data = JSON.parse(data);

    let sessionToken = sessionStorage.getItem("token");
    sessionToken = JSON.parse(sessionToken);

    const handleProfileShow = () => {
        if (!showProfile) {
            setProfile(true)
        }
    }

    const handleProfileHide = () => {
        if (showProfile) {
            setProfile(false)
        }
    }

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.removeItem("token");
        history.push("/admin")
    }

    const showSideBar = () => {
        if (showSidebar === "none") {
            setSidebar("visible")
        }
        else if (showSidebar === "visible") {
            setSidebar("none")
        }
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {
                                pathname === "/" ||
                                    pathname === "/admin" ||
                                    pathname === "/signup" ?
                                    null :
                                    <MenuIcon
                                        onClick={showSideBar}
                                    />
                            }

                        </IconButton>
                        {/* place for sidebar components */}
                        <Sidebar
                            showSidebar={showSidebar}
                            showSideBar={showSideBar} />

                        <Typography
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Student Management
                        </Typography>

                        <Button color="inherit">
                            {pathname !== "/"
                                && pathname !== "/admin"
                                && pathname !== "/signup" ?
                                <CircleNotificationsIcon /> : null}

                        </Button>

                        <Button
                            color="inherit"
                            onMouseOver={handleProfileShow}
                            onMouseOut={handleProfileHide}>
                            {data || sessionToken ? <AccountCircleIcon /> : <AccountCircleIcon />}
                        </Button>


                        {data || sessionToken ?
                            <div onMouseOver={handleProfileShow}
                                onMouseOut={handleProfileHide}
                                className="profile__logout"
                                style={showProfile ?
                                    { display: "block" }
                                    : { display: "none" }}
                            >
                            <p onClick={() => { history.push("/profile") }}>Profile</p>
                                <p onClick={logOut}>Logout</p>
                            </div> : null}

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
