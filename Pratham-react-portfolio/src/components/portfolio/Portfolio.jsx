import React from 'react';
import IMG1 from '../../assets/bg.jpg';
import IMG2 from '../../assets/JS_Portfolio.png';
import IMG3 from '../../assets/Textutills.png';
import IMG4 from '../../assets/react_portfolio.png';
// import IMG5 from '../../assets/news.png';
// import IMG6 from '../../assets/math.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Pratham Fitness',
      img: IMG1,
      link: 'https://pratham-gym-site.netlify.app/',
      github: 'https://github.com/Pratham-2803/Gym-Website-Pratham',
    },
    {
      id: 2,
      title: 'Portfolio by HTML,CSS,JS',
      img: IMG2,
      link: 'https://portfolio-by-html-css-js.netlify.app/',
      github: 'https://github.com/Pratham-2803/Portfolio-by-html-css-js',
    },
    {
      id: 3,
      title: 'TextUtills by ReactJS',
      img: IMG3,
      link: 'https://textutills-by-pratham-react.netlify.app/',
      github: 'https://github.com/Pratham-2803/textutils----reactjs',
    },
    {
      id: 4,
      title: 'Portfolio by ReactJS',
      img: IMG4,
      link: '#',
      github: 'https://github.com/Pratham-2803/portfolio-reactjs-pratham',
    },
    // {
    //   id: 5,
    //   title: 'World News',
    //   img: IMG5,
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    // },
    // {
    //   id: 6,
    //   title: 'Math Resource',
    //   img: IMG6,
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio