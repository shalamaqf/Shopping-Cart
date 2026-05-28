import { Link } from "react-router"

export default function HomePage() {
    return (
        <main className="home-page">
            <div className="img-hero-container">
                <img src="" alt="Hero image of a girl with a long sleeve shirt"/>
            </div>
            <div className="desc-text">
                <h1>Shop the Best</h1>
                <p>Find what you love. Great prices, reliable delivery, and a seamless shopping experience.</p>
            </div>
            <div className="link-container">
                <Link className='shop-now-link' to='/shop-page'>Shop now</Link>
            </div>
        </main>
    )
}