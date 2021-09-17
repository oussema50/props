import React from 'react'

const Skills = (props) => {
    const myskills = props.skills
    return (
        <div className="skills">
                <h2 className="title-comp">My Skills</h2>
                <ul className="skills-list">
                    { myskills.map((item)=>
                        <li key={item.id}><span style={{width:[item.progress],backgroundColor:"#006bff"}}></span>{item.skill} {item.progress}</li>
                    )}
                </ul>
                
        </div>
    )
}

export default Skills
