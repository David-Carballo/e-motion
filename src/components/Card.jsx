import '../styles/Card.css'
import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import favLogo from "/src/assets/fav2.png";


function Card(props){

    const {id, title, year, genre, url, rating, type, isFavorite} = props

    return(
        <Link to={`/items/${id}`} id="card">
            <img src={favLogo} className={`${isFavorite ? "img-fav" : "img-nofav"} item-fav`} />
            <img src={url} alt="" />
            <div id ="card-desc">
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