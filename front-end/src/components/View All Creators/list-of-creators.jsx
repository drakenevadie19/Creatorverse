import DisplayCreatorFrame from "./display-creator-frame";
// import { useNavigate } from "react-router-dom";
import { supabase } from "../../database/client";
import { useEffect, useState } from "react";

const ShowCreators = () => {
    const [data, setData] = useState([]);
    
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
                <div className="list-of-blocks-of-creators">
                    {data.map((profile, index) => (
                        <div className="creator-frame" key={index} style={{ backgroundImage: `url(${profile.imageURL})` }}>
                            <DisplayCreatorFrame profile={profile} id={profile.id} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShowCreators;