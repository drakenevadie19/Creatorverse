import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dummyData from "../dummy-data";

const AddCreator = () => {
    const currentNumberOfCreators = dummyData.length;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");

    const navigate = useNavigate();

    const handleSubmit = ()=> {
        dummyData.push({
            id: currentNumberOfCreators+1,
            name: name,
            image: image,
            description: description,
            youtubeLink: youtubeLink, 
            twitterLink: twitterLink,
            instagramLink: instagramLink
        });
        navigate("/");
    }

    return (
        <>
            <div className="display-area">
                <h1>Form to add a new creator</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} placeholder="Text" aria-label="Text" onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={image} placeholder="Text" aria-label="Text" onChange={(e) => setImage(e.target.value)} />
                    <input type="text" value={description} placeholder="Text" aria-label="Text" onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" value={youtubeLink} placeholder="Text" aria-label="Text" onChange={(e) => setYoutubeLink(e.target.value)} />
                    <input type="text" value={twitterLink} placeholder="Text" aria-label="Text" onChange={(e) => setTwitterLink(e.target.value)} />
                    <input type="text" value={instagramLink} placeholder="Text" aria-label="Text" onChange={(e) => setInstagramLink(e.target.value)} />

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCreator;