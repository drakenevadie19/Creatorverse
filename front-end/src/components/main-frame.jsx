import { Outlet } from "react-router-dom";

const MainFrame = () => {
    return (
        <>
            <div className="main">
                <div>
                    <h1>Creato Verse</h1>
                </div>

                <Outlet />
            </div>
        </>
    )
}

export default MainFrame;