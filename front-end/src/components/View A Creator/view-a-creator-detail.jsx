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
            <h1>Details of a creator</h1>
            <div className="individual-creator">
                <img src={`${profile.image}`} alt="Image here"/>
                <div>
                    <h1>{profile.name}</h1>
                    <p>{profile.description}</p>
                </div>
            </div>

            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default ViewCreator;