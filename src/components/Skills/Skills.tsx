import React from 'react'
import { SkillProps } from './Skills.types';

const Skill = (props: SkillProps) => {
    const { skills } = props;
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoggedIn(true);
        }, 1000);
    }, []);

    return (
        <>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            {isLoggedIn
                ? (
                    <button>Start learning</button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )}
        </>
    )
}

export default Skill