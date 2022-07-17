import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>15 days internship at Vnurture Technologies </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Basic Projects related to GTU syllabus</small>
            </article>
          </div>
          <p>I'm Pursuing Computer Engineering at LJ Institute of Engineering and Technology with syllabus of Gujarat Technological University. I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript, building everything from landing pages to APIs. My experience as a intern at Vnurture Technologies was too good, It helps me to gain advance knowledge of ReactJS. However, it has helped me become a good Web Developer and I had experienced some industrial environment. I will Complete my Engineering in 2023, So I'm Looking for a job of web Developer </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro