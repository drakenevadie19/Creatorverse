import DisplayCreatorFrame from "./display-creator-frame";
// import { useNavigate } from "react-router-dom";

const ShowCreators = ({ data }) => {
    // const navigate = useNavigate();
    
    return (
        <>
            <div className="display-area">
                {/* <h1>List of Creators</h1> */}
                <div className="list-of-blocks-of-creators">
                    {data.map((profile, index) => (
                        <div className="creator-frame" key={index}  style={{ backgroundImage: `url(${profile.image})` }}>
                            <DisplayCreatorFrame id={index} />
                        </div>
                        
                    ))}
                </div>
            </div>
        </>
        
    )
}

export default ShowCreators;