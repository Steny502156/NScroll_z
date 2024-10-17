
import React from 'react';

function CartDetails({ anime }) {
    if (!anime) {
        return <div>No anime set selected for purchase.</div>;
    }

    return (
        <div>
            <h2>Cart Details</h2>
            <div>
                <h3>{anime.title}</h3>
                <p>Price: {anime.price}</p>
                <p>Origin: {anime.origin}</p>
                <p>Author: {anime.author}</p>
                <img src={anime.image} alt={anime.title} style={{ maxWidth: '300px' }} />
            </div>
        </div>
    );
}

export default CartDetails;
