import { Link } from 'react-router-dom'
import {studies, experiences} from '../data/resume'

function Resume(){
    return (
        <>
        <h1>Titulación</h1>
            {studies.map((study)=>(
                <li key={study.id}>
                    <h3>{study.title}</h3>
                    <p>{study.institution}</p>
                    <p>{study.date}</p>
                </li>
            ))
            }
        <h1>Experiencia</h1>
            {experiences.map((experience)=>(
                <li key={experience.id}>
                    <h3>{experience.title}</h3>
                    <p>{experience.company}</p>
                    <p>{experience.date}</p>
                </li>
            ))
            }
        <Link to='/'>Home</Link>
        </>
    )
}

export default Resume
