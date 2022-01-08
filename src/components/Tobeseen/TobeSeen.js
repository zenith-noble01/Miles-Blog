import "./Tobeseen.css"

const TobeSeen = ({Outlet, setProfile, profile}) => {
    return (
        <div className="tobeSeen">
        {Outlet ? "": <See />}
        </div>
    )
}

function See({profile}){
    return(
        <div className="see">
            {profile ? "" : "zenith"}
        </div>
    )
}

export default TobeSeen
