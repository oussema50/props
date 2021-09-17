
const user = (props) => {
    
    return (
        <div className="user" >
            <h2 className="title-comp">Dtails</h2>
            
            <div className="user-details">
                <div>
                    <h4>fullName:</h4>
                    <span>{props.userData.fullName}</span>
                </div>
                <div>
                    <h4>Age:</h4>
                    <span>{props.userData.age} years</span>
                </div>
                <div>
                    <h4>Location:</h4>
                    <span>{props.userData.location}</span>
                </div>
                
                

            </div>
        </div>
    )
}

export default user
