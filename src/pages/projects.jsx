import { Link } from 'react-router-dom'
import projects from '../data/projects'


function Projects (){
    return (
        <>
        <h1>Proyectos del usuario</h1>
        <ul>
            {projects.map((userProject)=>(
                <li key={userProject.id}>
                    <a href={userProject.url}>{userProject.name}</a>
                    <p>{userProject.description}</p>
                    <img src={userProject.img} alt={userProject.name} />
                </li>
            ))
            }
        </ul>
        <Link to='/'>Home</Link>
        </>
    )
}

export default Projects