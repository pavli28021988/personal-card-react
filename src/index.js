import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const abilities = [
    {
        skill: "HTML+CSS",
        level: "intermediate",
        color: "#2662EA",
        emoji: "😀"
    },
    {
        skill: "JavaScript",
        level: "intermediate",
        color: "#EFD81D",
        emoji: "😀"
    },
    {
        skill: "Web Design",
        level: "intermediate",
        color: "#C3DCAF",
        emoji: "👌"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33",
        emoji: "👏"
    },
    {
        skill: "React",
        level: "begginer",
        color: "#60DAFB",
        emoji: "👏"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00",
        emoji: "👌"
    }
];

function App() {
    return (

        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>

        </div>


    );
}
function Avatar() {
    return <img className="avatar" src="copyProfile.jpg" alt="Pavlina Ivanova" />

};
function Intro() {

    return (
        <div>
            <h1>Pavlina Ivanova</h1>
            <p>Front-end Developer.When not coding or studying,I like to travel,to see whole entire word,meeting people different cultures and landscapes</p>
        </div>
    );

};

function SkillList() {
    return (
        <div className="skill-list">

            {/*  <Skills
                skill='React'
                emoji='💪'
                color='blue'
            />
            <Skills skill="HTML+CSS" emoji="💪" color="orange" />

            <Skills skill="JavaScript" emoji="💪" color="yellow" /> */}

            {abilities.map((skill) => (
                <Skills skill={skill.skill} color={skill.color} level={skill.level} emoji={skill.emoji} />
            ))}



        </div>
    )
}
/* function Skills(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
            <span>{props.level}</span>

        </div>
    )

}; */
function Skills({ skill, color, level, emoji }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>{emoji}</span>
            <span>{level}</span>
            {/* {level === 'beginner' && "🤣"} 
                {level === "intermediate" && "😉"}
                {level === "advanced" && "😍
"}
                */}

        </div>
    )

};



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
