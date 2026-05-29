import Card from '../card/Card.jsx';
import PropTypes from 'prop-types';

export default function CardGrid({products}) {
    return (
        <div className="card-grid">
            {products.map(item => {
                return <Card key={item.id} item={item}/>
            })}
        </div>
    )
}

CardGrid.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    ).isRequired
}