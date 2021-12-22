import React from 'react'
import "./profile.css"

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__header">
                <p>Profile</p>
                <p>This is a public profile. Your Profile information will be visible to everyone, including visitors that are not following you.</p>
                <p>Basic information</p>
            </div>
            <div className="profile__content">
                <div className="profile__content__Container">
                    <p>Profile photo</p>
                    <p>Recommended dimension 200 * 200</p>
                </div>
                <label htmlFor="file">Upload a Photo</label>
                <input type="file" id="file" style={{display: "none"}}/>
            </div>
            <div className="profile__content">
                <div className="profile__content__Container">
                    <p>Full name</p>
                    <p>Example:  Zenith Noble</p>
                </div>
                <input type="text" placeholder="Zenith noble" />
            </div>
            <div className="profile__content">
                <div className="profile__content__Container">
                    <p>Headline</p>
                    <p>Example:  Writer, software developer</p>
                </div>
                <input type="text" placeholder="" />
            </div>
            <div className="profile__content">
                <div className="profile__content__Container">
                    <p>Bio</p>
                    <p>Example: Hey everyone I'm a software developer and a graffic designer. I love to code, play games</p>
                    <p>max length: 300 characters</p>
                </div>
                <textarea placeholder=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit illum, culpa atque ratione perspiciatis, dolore iusto assumenda sit sint asperiores veniam voluptates fugiat consequuntur vero pariatur mollitia error omnis nihil in perferendis, earum possimus modi quas! Soluta fugiat deserunt"></textarea>
            </div>
            <div className="profile__content">
                <div className="profile__content__Container">
                    <p>Location</p>
                    <p>Example:  Yaounde, Cameroon</p>
                </div>
                <input type="text" placeholder="Yaounde, Cameroon" />
            </div>
            <div className="profile__social__header">
                <p>Social links</p>
            </div>
            <div className="profile__content">
                <div className="profile__content__Container__links">
                    <p>Website URL</p>
                    <p>Example:  https://example.com/</p>
                </div>
                <input type="text" placeholder="" />
            </div>
            <div className="profile__content">
                <div className="profile__content__Container__links">
                    <p>Twitter URL</p>
                    <p>Example:  https://twitter.com/username</p>
                </div>
                <input type="text" placeholder="" />
            </div>
            <div className="profile__content">
                <div className="profile__content__Container__links">
                    <p>Facebook URL</p>
                    <p>Example:  https://facebook.com/username</p>
                </div>
                <input type="text" placeholder="" />
            </div>
            <div className="profile__content">
                <div className="profile__content__Container__links">
                    <p>Instagram URL</p>
                    <p>Example:  https://instagram.com/username</p>
                </div>
                <input type="text" placeholder="" />
            </div>
            <div className="profile__content">
                <div className="profile__content__Container__links">
                    <p>LinkedIn URL</p>
                    <p>Example:  https://linkedin.com/username</p>
                </div>
                <input type="text" placeholder="" />
            </div>
            <div className="saveBtn">
                <div></div>
                <button>save changes</button>
            </div>
        </div>
    )
}

export default Profile
