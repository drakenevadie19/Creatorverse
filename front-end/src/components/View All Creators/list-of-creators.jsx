import DisplayCreatorFrame from "./display-creator-frame";
import { useNavigate } from "react-router-dom";

const ShowCreators = ({ data }) => {
    const navigate = useNavigate();
    
    return (
        <>
            <h1>List of Creators</h1>
            <div className="list-of-blocks-of-creators">
                {data.map((profile, index) => (
                    <div key={index} onClick={() => navigate(`/${index}`)}>
                        <DisplayCreatorFrame profile={profile} />
                    </div>
                    
                ))}
            </div>
        </>
        
    )
}

export default ShowCreators;