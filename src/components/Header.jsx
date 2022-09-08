import { Link } from "react-router-dom";

export function Header(){
    return (
    <header>
        <h1>Listagem de filmes</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}