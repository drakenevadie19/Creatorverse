import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainFrame = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="main">
                <div className="header">
                    <h1>Creato Verse</h1>
                    <nav>
                        <button type="button" className="btn btn-primary" onClick={() => navigate("/")}>VIEW ALL CREATORS</button>
                        <button type="button" className="btn btn-primary" onClick={() => navigate("/new")}>ADD A CREATOR</button>
                    </nav>
                </div>

                
                <Outlet />
            </div>
        </>
    )
}

export default MainFrame;