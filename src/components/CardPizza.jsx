import React from 'react'

const CardPizza = (props) => {
    const isLast = props.pizza.ingredients.length - 1;
    const price = new Intl.NumberFormat('es-CL').format(props.pizza.price);

    return (
        <div className="col-12 col-md-4 p-2" key={props.id}>
            <div className="card">
                <img src={props.pizza.img} className="card-img-top" alt="Pizza" />
                <div className="card-body p-0">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <h5 className="card-title">{props.pizza.name}</h5>
                        </li>
                        <li className="list-group-item">
                            <div className="d-block text-center fs-6">
                                Ingredientes
                            </div>
                            <div className="d-flex justify-content-center fs-7">
                            🍕 {props.pizza.ingredients.map((ing, index) => <span className='me-1'>{ing}{isLast === index ? '' : ','}</span>)}
                            </div>
                        </li>
                        <li className="list-group-item">
                            <h4 className="text-center">Precio: ${price}</h4>

                            <div className="d-flex col-12 justify-content-around my-4">
                                <button type="button" className="btn btn-outline-dark btn-sm">Ver más 👀</button>
                                <button type="button" className="btn btn-dark btn-sm">Añadir 🛒</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardPizza