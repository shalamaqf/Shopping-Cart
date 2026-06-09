import Card from '../card/Card.jsx';
import PropTypes from 'prop-types';
import styles from './CardGrid.module.css'

export default function CardGrid({products, addToCart}) {
    return (
        <div className={styles['card-grid']}>
            {products.map(item => {
                return <Card key={item.id} item={item} addToCart={addToCart}/>
            })}
        </div>
    )
}

CardGrid.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired,

    addToCart: PropTypes.func.isRequired
}