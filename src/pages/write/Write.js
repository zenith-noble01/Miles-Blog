import "./write.css"
import code from '../../components/images/miles.jpg'
const Write = () => {
    return (
        <div className="write">
            <div className="writeImgContainer">
               <img src={code} alt=""  className="writeImg"/>
            </div> 
            <div className="writeContainer">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa fa-plus"></i>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display: "none"}} />
                    <input type="text" autoFocus={true} placeholder="Title" className="writeInput"/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write a story" className="writeInput writeText" type="text" ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
            </div>
        </div>
    )
}

export default Write
