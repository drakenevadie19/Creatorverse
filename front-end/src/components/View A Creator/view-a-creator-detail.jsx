import { useNavigate, useParams } from "react-router-dom";
import dummyData from "../dummy-data";


const ViewCreator = () => {
    const { id } = useParams();
    const profile = dummyData[id];

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/edit/${id}`);
    }

    const handleDelete = () => {
        dummyData.splice(id, 1);
        navigate("/");
    }
    
    return (
        <>
            <div className="display-area">
                <h1>Details of a creator</h1>
                <div className="individual-creator">
                    <div className="creator-image">
                        <img src={`${profile.image}`} className="creator-image-size" alt="Image here"/>
                    </div>
                    <div className="individual-info">
                        <h1>{profile.name}</h1>
                        <p>{profile.description}</p>

                        {
                            profile.youtubeLink &&
                            <div>

                            </div>
                        }
                        
                        <div className="button-group">
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCreator;