import { useNavigate, useParams } from "react-router-dom";
import dummyData from "../dummy-data";
import { useState } from "react";


const EditCreator = () => {
    const { id } = useParams();
    const profile = dummyData[id];

    const [name, setName] = useState(profile.name);
    const [image, setImage] = useState(profile.image);
    const [description, setDescription] = useState(profile.description);
    const [youtubeLink, setYoutubeLink] = useState(profile.youtubeLink);
    const [twitterLink, setTwitterLink] = useState(profile.twitterLink);
    const [instagramLink, setInstagramLink] = useState(profile.instagramLink);

    const navigate = useNavigate();

    const handleSubmit = ()=> {
        dummyData[id].name = name;
        dummyData[id].image = image;
        dummyData[id].description = description;
        dummyData[id].youtubeLink = youtubeLink;
        dummyData[id].twitterLink = twitterLink;
        dummyData[id].instagramLink = instagramLink;
        navigate("/");
    }

    const handleDelete = () => {
        dummyData.splice(id, 1);
        navigate("/");
    }

    return (
        <>
            <div className="display-area">
                <h1>Form to edit a new creator</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} placeholder="Text" aria-label="Text" onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={image} placeholder="Text" aria-label="Text" onChange={(e) => setImage(e.target.value)} />
                    <input type="text" value={description} placeholder="Text" aria-label="Text" onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" value={youtubeLink} placeholder="Text" aria-label="Text" onChange={(e) => setYoutubeLink(e.target.value)} />
                    <input type="text" value={twitterLink} placeholder="Text" aria-label="Text" onChange={(e) => setTwitterLink(e.target.value)} />
                    <input type="text" value={instagramLink} placeholder="Text" aria-label="Text" onChange={(e) => setInstagramLink(e.target.value)} />

                    <div>
                        <button type="submit" className="btn btn-info">Submit</button>
                        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditCreator;