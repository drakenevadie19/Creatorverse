import DisplayCreatorFrame from "./display-creator-frame";

const ShowCreators = ({ data }) => {
    return (
        <>
            <h1>List of Creators</h1>
            <div className="list-of-blocks-of-creators">
                {data.map((profile, index) => (
                    <div key={index}>
                        <DisplayCreatorFrame profile={profile} />
                    </div>
                    
                ))}
            </div>
        </>
        
    )
}

export default ShowCreators;