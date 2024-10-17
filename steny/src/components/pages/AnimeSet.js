import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const allAnimeSets = [
    {
        title: "Jojo's Bizarre Adventure",
        price: "$20",
        origin: "Japan",
        author: "Hirohiko Araki",
        image: "https://image.api.playstation.com/cdn/UP0700/CUSA04897_00/9KyMrO6GjTtcrj1lC0aBENsrJroVszez.png",
        link: "https://store.crunchyroll.com/collections/manga/jojos-bizarre-adventure/"
    },
    {
        title: "Death Note",
        price: "$10",
        origin: "Japan",
        author: "Tsugumi Ohba",
        image: "https://th.bing.com/th/id/R.0fec8b8d9ccb2d6a58668ef70e26246d?rik=HeW1NqwfkIhQOA&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f22400000%2fDeath-Note-death-note-22494107-1024-768.jpg&ehk=RdkMP3Cm7wDmNEON%2bycFXlUx%2fT1hmx3QytZojV8y0Ro%3d&risl=&pid=ImgRaw&r=0",
        link: "https://www.amazon.com/Death-Note-All-One-Tsugumi/dp/1421597713"
    },
    {
        title: "Bleach",
        price: "$30",
        origin: "Japan",
        author: "Noriyuki Abe",
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740918/bleach-the-official-anime-coloring-book-9781974740918_hr.jpg",
        link: "https://epicstream.com/article/where-to-read-bleach-manga-online"
    }
];

function AnimeSet() {
    const { setId } = useParams();
    const { addToCart } = useCart();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        const animeSetIndex = parseInt(setId, 10) - 1;
        if (animeSetIndex >= 0 && animeSetIndex < allAnimeSets.length) {
            setAnime(allAnimeSets[animeSetIndex]);
        }
    }, [setId]);

    const handleAddToCart = () => {
        if (anime) {
            addToCart(anime);
            alert(`${anime.title} added to cart!`);
        }
    };

    if (!anime) {
        return <div>Anime set not found.</div>;
    }

    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h1 className='text-capitalize text-center text-danger mt-3 mb-5'>
                                {anime.title}
                            </h1>
                            <div className="container text-center">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img
                                        src={anime.image}
                                        className="card-img-top"
                                        alt={anime.title}
                                        height="250px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{anime.title}</h5>
                                        <p className="card-text">Price: {anime.price}</p>
                                        <p className="card-text">Origin: {anime.origin}</p>
                                        <p className="card-text">Author: {anime.author}</p>
                                        <Link to={anime.link} className="btn btn-primary mb-2">
                                            Buy Now
                                        </Link>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <button onClick={handleAddToCart} className="btn btn-secondary" style={{ backgroundColor: "#ff5722", color: "#fff", fontFamily: "Arial, sans-serif" }}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AnimeSet;
