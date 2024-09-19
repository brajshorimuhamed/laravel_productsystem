import React from 'react';
import { Carousel } from 'react-bootstrap';

var heroData = [
  {
    id: 1,
    image: ('/src/assets/images/ushqimore.jpg'),
    title: 'Kategoria Ushqimore',
    description: 'Ushqimet tona tradicionale',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: ('/src/assets/images/tekstil.jpg'),
    title: 'Kategoria e Tekstilit',
    description: 'Veshmbathje me shume stil',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: ('/src/assets/images/teknike.jpg'),
    title: 'Kategoria Teknike',
    description: 'Brendet e fundit ne fushen e Teknologjise Informative - IT',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100 h-500"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;