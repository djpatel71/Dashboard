import React, { useState, useEffect } from 'react';
import { useGesture } from 'react-use-gesture';
import './Services.css';
import { BsArrowRightShort } from 'react-icons/bs';

import img from '../../../../Assets/service.png';
import img1 from '../../../../Assets/service2.png';
import img3 from '../../../../Assets/service3.png';

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      image: img,
      title: 'EMMSA',
      body: 'The NLP coachs goal is to bring you to mentally overcome the thought patterns that limit you from reaching your goals. Using Neuro-Linguistic Programming can clearly identify strategies you use in your decision-making or your behavioral patterns',
    },
    {
      image: img1,
      title: 'EPK',
      body: 'The NLP coachs goal is to bring you to mentally overcome the thought patterns that limit you from reaching your goals. Using Neuro-Linguistic Programming can clearly identify strategies you use in your decision-making or your behavioral patterns',
    },
    {
      image: img3,
      title: 'Graphic Design',
      body: 'The NLP coachs goal is to bring you to mentally overcome the thought patterns that limit you from reaching your goals. Using Neuro-Linguistic Programming can clearly identify strategies you use in your decision-making or your behavioral patterns',
    },
    {
      image: img1,
      title: 'Music Distribution',
      body: 'The NLP coachs goal is to bring you to mentally overcome the thought patterns that limit you from reaching your goals. Using Neuro-Linguistic Programming can clearly identify strategies you use in your decision-making or your behavioral patterns',
    },
  ];

  const handleSeeAllClick = () => {
    setShowAll(!showAll);
  };

  const bind = useGesture({
    onSwipe: ({ direction, distance }) => {
      if (direction === 'RIGHT') {
        setCurrentIndex((currentIndex - 1 + services.length) % services.length);
      } else if (direction === 'LEFT') {
        setCurrentIndex((currentIndex + 1) % services.length);
      }
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % services.length);
    }, 3000); // update every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, services]);

  return (
    <div className="listingSection" {...bind()}>
      <div className="heading flex">
        <h1>Services</h1>
        <button className="btn flex" onClick={handleSeeAllClick}>
          {showAll ? 'See Less' : 'See All'} <BsArrowRightShort className="icon" />
        </button>
      </div>

      {showAll && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleSeeAllClick}>×</span>
            <h2>All Services</h2>
            <div className="secContainer flex">
              {services.map((service, index) => (
                <div key={index} className="singleItems">
                  <img src={service.image} alt="Image Name" />
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!showAll && (
        <div className="secContainer flex">
          <div className="singleItem">
            <img src={services[currentIndex].image} alt="Image Name" />
            <h3>{services[currentIndex].title}</h3>
            <p>{services[currentIndex].body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;