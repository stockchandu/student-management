import "./adminhome.css";

export const AdminSidebar = ({ live }) => {
    return (
        <>
            <div className="admin__home-sidebar">
                <div className="admin__home-quote">
                    <div>Love from your heart what you are doing,</div>
                    <div>no matter which work  you are doing. </div>
                </div>

                <h3>LIVE VISITORS</h3>
                <div className="admin__home-live-people">
                    {live}
                </div>
            </div>
        </>
    )
}