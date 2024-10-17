import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';
import Vmc from './inc/Vmc';

const allAnimeSets = [
    {
        id: 1,
        title: "Jojo's Bizarre Adventure",
        price: "$20",
        origin: "Japan",
        author: "Hirohiko Araki",
        image: "https://image.api.playstation.com/cdn/UP0700/CUSA04897_00/9KyMrO6GjTtcrj1lC0aBENsrJroVszez.png",
        link: "https://store.crunchyroll.com/collections/manga/jojos-bizarre-adventure/"
    },
    {
        id: 2,
        title: "Death Note",
        price: "$10",
        origin: "Japan",
        author: "Tsugumi Ohba",
        image: "https://th.bing.com/th/id/R.0fec8b8d9ccb2d6a58668ef70e26246d?rik=HeW1NqwfkIhQOA&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f22400000%2fDeath-Note-death-note-22494107-1024-768.jpg&ehk=RdkMP3Cm7wDmNEON%2bycFXlUx%2fT1hmx3QytZojV8y0Ro%3d&risl=&pid=ImgRaw&r=0",
        link: "https://www.amazon.com/Death-Note-All-One-Tsugumi/dp/1421597713"
    },
    {
        id: 3,
        title: "Bleach",
        price: "$30",
        origin: "Japan",
        author: "Noriyuki Abe",
        image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974740918/bleach-the-official-anime-coloring-book-9781974740918_hr.jpg",
        link: "https://epicstream.com/article/where-to-read-bleach-manga-online"
    }
];

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">My Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                Innovating Excellence
              </p>
              <Link to="/about" className="btn btn-warning shadow"> Read More </Link>
            </div>
          </div>
        </div>
      </section>
      <Vmc />
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Anime Sets</h3>
              <div className="underline mx-auto"></div>
            </div>
          </div>
          <div className="row">
            {allAnimeSets.map((anime) => (
              <div className="col-md-4 mb-4" key={anime.id}>
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
                    <Link to={`/animeset/${anime.id}`} className="btn btn-primary mt-2">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
