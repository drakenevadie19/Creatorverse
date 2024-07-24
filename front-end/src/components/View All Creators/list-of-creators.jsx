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
                        <div className="searchBar" onClick={() => setSearching(true)}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                        : 
                        <div className="searchBar">
                            {/* <span className="input-group-text" onClick={() => setSearching(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </span> */}
                            <input type="search" className="searchInput" name="search" placeholder="Search" aria-label="Search" style={{marginBottom: "0"}} />
                            <span className="input-group-text" onClick={() => setSearching(false)} style={{padding: "20px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>
                            </span>
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