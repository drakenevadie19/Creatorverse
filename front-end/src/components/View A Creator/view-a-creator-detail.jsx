import { useParams } from "react-router-dom";
import dummyData from "../dummy-data";


const ViewCreator = () => {
    const { id } = useParams();
    const profile = dummyData[id];
    
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
        </>
    )
}

export default ViewCreator;