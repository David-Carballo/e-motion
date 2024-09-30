import React from 'react'
import { Link } from 'react-router-dom';

function Card(props){

    const {id, title, year, genre, URL, length, rating, type, isFavorite} = props

  //MouseEnter estado en true => display Titulo y Boton Favoritos
  //MouseLeave estado en falso
    return(
        <Link to={`/items/${id}`} id="card">
            <img src={URL} alt="" />
            <span></span>
            <div className='flex-column'>
                <p>{title}</p>
                {/* <p>{year}</p> */}
            </div>
        </Link>
    );
}

export default Card;