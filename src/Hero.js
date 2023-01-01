import React from 'react';
import figureImg from './images/lbj.png';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
          The world's favourite <br />
            online sports betting company
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Est velit fugit reiciendis necessitatibus 
            autem recusandae suscipit rem, inventore soluta eos, 
            provident similique nemo expedita culpa quibusdam 
            vitae error veniam ullam!
          </p>
          <button className='btn'>Place Your Bet</button>
        </article>
        <article className='hero-images'>
          <img src={figureImg} className='figure-img' alt='figure' />
        </article>
      </div>
    </section>
  );
};

export default Hero;