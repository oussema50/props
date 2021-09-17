
import About from "./About"
import User from "./User"

const Profile = (props) => {
    console.log(props);
    // props.handlFn(props.data.fullName)
    return (
        <div className="profile-content">
            {props.handlFn(props.data.fullName)}
            <About/>
            <img src="../images/person.jpg"/>
            <User userData = {props.data} />
        </div>
    )
}

export default Profile
