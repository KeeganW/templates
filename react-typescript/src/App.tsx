import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Sea Life</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/whales">Whales</Link> | {" "}
                <Link to="/sharks">Sharks</Link>
            </nav>
            <Outlet />
        </div>
    );
}