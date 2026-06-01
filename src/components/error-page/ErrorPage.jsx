import { Link } from "react-router"

export default function ErrorPage() {
    return (
        <div className="error-container">
            <p>This page doesn't exist...</p>
            <Link to='/'>You can click here to go back to home page though!</Link>
        </div>
    )
}