import "./post.css"
import adnet from '../images/adnet.png'
const Post = () => {
    return (
        <div className="post">
            <img src={adnet} alt="" className="postImg" />
            <div className="postInfo__container">
                <p className="post__title">Lorem ipsum dolor sit amet consectetur </p>
                <div className="post__title__category">
                    <p className="post__title_user_name">Zenith Noble</p>
                    <p className="post__title_date">1 hour ago</p>
                </div>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate at mollitia fugit. Molestiae praesentium voluptatum vel odio quae maiores nemo officiis ipsam quod ratione, necessitatibus eius quidem velit tenetur minus?</p>
        </div>
    )
}

export default Post
