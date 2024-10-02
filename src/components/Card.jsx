import '../styles/Card.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';


function Card(props){

    const {id, title, year, genre, URL, length, rating, type, isFavorite} = props

  //MouseEnter estado en true => display Titulo y Boton Favoritos
  //MouseLeave estado en falso
    return(
        <Link to={`/items/${id}`} id="card">
            <img src={URL} alt="" />
            <div className='flex-column'>
                <p>{title}</p>
                <Rating
                    name="read-only"
                    value={rating}
                    readOnly
                />
            </div>
        </Link>
    );
}

export default Card;