import Card from '../card/Card.jsx';

export default function CardGrid({products}) {
    return (
        <div className="card-grid">
            {products.map(item => {
                return <Card key={item.id} item={item}/>
            })}
        </div>
    )
}