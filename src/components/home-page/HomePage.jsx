import { Link } from "react-router-dom"
import bg from '../../assets/background.jpg'
import styles from './HomePage.module.css'

export default function HomePage() {
    return (
        <main className={styles.main}>
            <div className={styles['image-container']}>
                <img className={styles.image} src={bg} alt="Hero image of a girl with a long sleeve shirt"/>
            </div>
            <div className={styles.desc}>
                <h1>Shop the Best</h1>
                <p>Find what you love. Great prices, reliable delivery, and a seamless shopping experience.</p>
            </div>
            <div className={styles.link}>
                <Link className='shop-now-link' to='shop-page'>Shop now</Link>
            </div>
        </main>
    )
}