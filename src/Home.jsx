import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <span>
        <h1>Abel Chumillas</h1>
        <p>
            Actual Tema Leader en un equipo de consultoría. <br />
            Funciones en gestión de proyecto de I+D+i.
        </p>
        <ul>
            <li><Link to='/projects'>Projects portfolio</Link></li>
            <li><Link to='/resume'>Resume</Link></li>
        </ul>
    </span>
    </>
  );
}

export default Home;
