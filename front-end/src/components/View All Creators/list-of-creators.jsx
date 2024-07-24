import DisplayCreatorFrame from "./display-creator-frame";
// import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/client";
import { useEffect, useState } from "react";

const ShowCreators = () => {
    const [data, setData] = useState([]);
    const [searching, setSearching] = useState(false);
    
    useEffect(() => {
        async function getList() {
            const { data, error } = await supabase.from("creators").select();
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setData(data);
            }
        }

        getList();
    }, []);
    
    return (
        <>
            <div className="display-area">
                
                {/* <h1>List of Creators</h1> */}

                {
                    searching === false 
                        ?
                        <div onClick={() => setSearching(true)}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                       :
                       <div>
                            <input type="search" name="search" placeholder="Search" aria-label="Search" />
                            <a onClick={() => setSearching(false)} >x</a>
                        </div>
                }
                
                {
                    data.length > 0 
                    ?
                    <div className="list-of-blocks-of-creators">
                        {data.map((profile, index) => (
                            <div className="creator-frame" key={index} style={{ backgroundImage: `url(${profile.imageURL})`, backgroundSize: "100% 100%" }}>
                                <DisplayCreatorFrame profile={profile} id={profile.id} />
                            </div>
                        ))}
                    </div>
                    : 
                    <h1>No content creators to show yet</h1>
                }
                
            </div>
        </>
    )
}

export default ShowCreators;