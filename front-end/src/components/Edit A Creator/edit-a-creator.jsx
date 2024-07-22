import { useNavigate, useParams } from "react-router-dom";
// import dummyData from "../dummy-data";
import { useEffect, useState } from "react";
import { supabase } from "../../database/client";

const EditCreator = () => {
    const { id } = useParams();

    // const [name, setName] = useState(profile.name);
    // const [image, setImage] = useState(profile.image);
    // const [description, setDescription] = useState(profile.description);
    // const [youtubeLink, setYoutubeLink] = useState(profile.youtubeLink);
    // const [twitterLink, setTwitterLink] = useState(profile.twitterLink);
    // const [instagramLink, setInstagramLink] = useState(profile.instagramLink);

    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [description, setDescription] = useState("");
    const [youtubeLink, setYoutubeLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function getThatCreatorById(id) {
            const { data, error, status } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

            if (status !== 200) {
                console.error('Error fetching data:', error);
                return null;
            } else {
                setName(data.name);
                setImageURL(data.imageURL);
                setDescription(data.description);
                setYoutubeLink(data.youtubeLink);
                setTwitterLink(data.twitterLink);
                setInstagramLink(data.instagramLink);
            }
        }
        
        getThatCreatorById(id);
    }, [])

    const handleSubmit = async ()=> {
        const response = await supabase
            .from('creators')
            .update({ name: name, imageURL: imageURL, description: description, youtubeLink: youtubeLink, twitterLink: twitterLink, instagramLink: instagramLink })
            .eq('id', id);
        if (response.status !== 200) {
            console.log("Error updating data", response);
        } else {
            console.log("Successfully updating data");
            navigate("/");
        }
    }

    const handleDelete = async () => {
        const response = await supabase
            .from('creators')
            .delete()
            .eq('id', id);
    
        if (response.status !== 200) {
            console.error('Error deleting data:', response);
        } else {
            console.log('Data deleted successfully!');
            navigate("/");
        }
    }

    return (
        <>
            <div className="display-area">
                {/* <h1>Form to edit a new creator</h1> */}
                <form>

                    <label>Name</label>
                    <input type="text" value={name} aria-label="Text" onChange={(e) => setName(e.target.value)} />

                    <label>Image</label>
                    <p><i>Provide a link to an image of your creator. Be sure to include the http://</i></p>
                    <input type="text" value={imageURL} aria-label="Text" onChange={(e) => setImageURL(e.target.value)} />

                    <label>Description</label>
                    <p><i>Provide a description of the creator. Who are they? What makes them interesting?</i></p>
                    <textarea type="text" value={description} aria-label="Text" onChange={(e) => setDescription(e.target.value)} required rows={3}/>

                    <h1>SOCIAL MEDIA LINKS</h1>
                    <p><i>Provide at least one of the creator&apos;s social media links.</i></p>
                        
                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>  
                        Youtube
                    </label>
                    <p><i>The creator&apos;s YouTube handle (without the @)</i></p>
                    <input type="text" value={youtubeLink} aria-label="Text" onChange={(e) => setYoutubeLink(e.target.value)} />

                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg> 
                        Twitter
                    </label>
                    <p><i>The creator&apos;s Twitter handle (without the @)</i></p>
                    <input type="text" value={twitterLink} aria-label="Text" onChange={(e) => setTwitterLink(e.target.value)} />

                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg> 
                        Instagram
                    </label>
                    <p><i>The creator&apos;s Instagram handle (without the @)</i></p>
                    <input type="text" value={instagramLink} aria-label="Text" onChange={(e) => setInstagramLink(e.target.value)} />

                    <div  className="button-group">
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={handleDelete} className="deleteButton">Delete</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditCreator;