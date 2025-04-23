import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Salon supun</h1>
        <p>Beauty begins the moment you decide to be yourself</p>
        <p>- Coco Chanel</p>
        <img src="/salon-image.png" alt="Salon Nayana" />
      </div>
      <div className="content">
        <p>Your lives inspire us, giving us the passion to reach deep within and bring out the best in you.</p>
        <p>We'd Love to Hear From You!</p>
      </div>
    </div>
  );
}

export default Home;
