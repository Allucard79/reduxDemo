import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';

const App = () => {
  return (
    <div className="App">
    <h1>Toyota Hybrid Vehicles</h1>
    <p>Toyota hybrids are designed to help you get the more out of your drive with fewer emissions. Get to know the full lineup of Toyota hybrid 
      vehicles, from compact, mid-size, and full-size sedans to mid-size and full-size hybrid SUVs. Learn more about how Toyota hybrid and 
      alternative fuel technology works, explore all the interior features our most fuel-efficient sedans and more. Discover legendary efficiency, 
      reliability, and power for the 21st Century plus build and price your new Toyota hybrid to effortlessly fit your unique lifestyle. Seemslike 
      the only thing Toyota hybrid vehicles can't help you do is waste fuel.
    </p>
    <h3>As the agile Corolla Hatchback and the versatile Corolla Touring Sports join the refined Corolla Sedan, the most popular car of all time     widens it’s offering – while also being reimagined as hybrid. So whatever your lifestyle and whichever body type you choose, you'll benefit    from self-charging hybrid powertrains, plus the reliability for which Toyota is renowned. Stylish, efficient and a joy to drive, this is       the new Corolla: an icon for the modern age.
    </h3>
    <h1>Efficiency, meet delight</h1>
    <p>With the new Corolla Hybrid, you will enjoy excellent fuel efficiency alongside super-low emissions – which fall to zero when you drive on 
      electric power alone. With more major cities introducing low-emission regulations, you’ll be free to drive wherever you want to.   
    </p>
    <p>Spirited and responsive in the city, the 1.8 litre Hybrid engine provides a smooth, relaxed drive. For the first time, both Corolla 
      Hatchback and Corolla Touring Sports are available with a new 2.0 litre Hybrid Dynamic Force engine delivering even more power. Whichever you 
      choose, you’ll enjoy an engaging yet economical experience, whatever the driving situation. And because Corolla is self-charging, you’ll never 
      even need to plug it in.
    </p>
    <p>When driving is this satisfying, it’s the perfect time to join over 12 million people – including two million here in Europe – in choosing 
      Toyota Hybrid. It’s just one of the reasons why, more than four decades after its launch, Corolla remains the world’s favourite car.
    </p>
    <CommentsListContainer />
    </div>
  );
};

export default App;