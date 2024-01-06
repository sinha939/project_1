import '../CSS/Card.css';

function Card(props) {
    return (
        <div className="card">
            <img className="service-img" src={props.imgUrl} alt={props.imgAlt} />
            <h1> {props.title} </h1>
            <p> {props.details} </p>
            <a href={props.learnMore}>Learn more</a>
            <div className='button'>
                <button id='add' onClick="" > Add </button>
                <button id='service' onClick="" > Take Service </button></div>

        </div>
    )
}

export default Card;