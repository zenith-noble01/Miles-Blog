import "./edit.css"
import profile from '../../components/images/adnet.png'

const Edit = () => {
    return (
        <div className="edit">
            <div className="editContainer">

            <div className="leftSide">
                <div className="leftContainer">
                    zenith miles is here with the team
                </div>
            </div>
            <div className="rightSide">
                <div className="rightContainer">
                    <div className="leftImgProfile">
                        <img src={profile} className="LeftImgProf" alt=""/>
                        <div className="userInfoLeft">
                        <span className="leftProfileUsername">Zed Miles</span>
                        <label htmlFor="file">
                        <span className="changeImg">Change Profile Picture</span>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            />
                        </label>
                        </div>
                    </div>
                    <div className="letfAbout">
                        <p className="leftAboutTitle">About Me</p>
                        <div className="aboutContainer">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque neque dolor culpa quibusdam modi iste qui doloribus. Suscipit dicta possimus deleniti aspernatur, labore illo soluta vero officia incidunt ratione accusantium.
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Edit
