import "./profile.css"
import img from '../../components/images/img.jpg'
import Sidebar from "../../components/sidebar/Sidebar"

const Profile = () => {
    return (
        <div className="profile">
            <div className="profileContainer">
                <div className="coverContainer">
                    <img src={img} alt="" className="coverPicture"/>
                </div>
                <div className="profilePicture">
                    <img src={img} alt="" className="profilePic" />
                <p>zenith noble</p>
                </div>
            </div>

            <div className="profileWrapper">
                <div className="profileEditcontent">
                    <p>miles blog</p>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default Profile
