import React from 'react'
import PageHeading from '../components/PageHeading'
import '../assets/css/Skill.css'
import SkillBar from './SkillBar'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/react.png'
import node from '../assets/images/node.png'
import mongo from '../assets/images/mongo.png'



const Skills = () => {
    
    const data = [
        {
            img: html,
            percentage: 85,
            color: 'red',
            addclass:'shek'
        },
        {
            img: css,
            percentage: 70,
            color: 'blue',
            addclass:'shek'
        },
        {
            img: js,
            percentage: 50,
            color: 'orange',
            addclass:'shek'
        },
        {
            img: react,
            percentage: 50,
            color: '#00ccff',
            addclass: 'spin',
        },
        {
            img: node,
            percentage: 60,
            color: 'green',
            addclass:'shek'
        },
        {
            img: mongo,
            percentage: 60,
            color: 'green',
            addclass:'shek'
        },
    ]

    return (
        <>
            <div className="skill-page">
                <div className="skill-section">
                    <PageHeading heading='Skills' />
                </div>
                <div className="skill-detail">
                    {data.map((item, i) => (
                        <SkillBar img={item.img} percentage={item.percentage} color={item.color} addclass={item.addclass} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills