
const Header = (props) => {
    
    return (
        <div className="header">
            <h2 className="title"><span>P</span>rofile</h2>
            <span>I'm a <strong>{props.profession}</strong></span>
        </div>
    )
}

export default Header
