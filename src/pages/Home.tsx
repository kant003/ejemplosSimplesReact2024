import { Link } from "react-router-dom";

export default function Home() {
    return <nav>
    <ul className="flex flex-row gap-4 flex-wrap">
        <li> <Link to="Ejem1">Ejemplo 1: Componente usando clases</Link></li>
    </ul>
</nav>

}