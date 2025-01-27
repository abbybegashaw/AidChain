import React from 'react';
import Image from 'next/image';
import filledRectangle from '@/public/homepagenew/filled-ractangle.svg';
import arrowRectangle from '@/public/homepagenew/arrow-rentangle.svg';
import aboutRectangle from '@/public/homepagenew/about-thea-rectangle.svg';
import heroImg from '@/public/homepagenew/homepage-hero-img.svg';
import '@/styles/homepagenew.css';

const ModalExpandable = () => {
  return (
    <div>
      <div className="description-about">
        <div className="description-about-description">
          <Image
            src={aboutRectangle}
            alt=""
            className="description-about-rectangle"
          />
          <h4 className="description-about-heading">About Theah.</h4>
          <p className="description-about-paragraph">
            At Property Vision, we revolutionize the way you perceive property
            listings. Gone are the days of drab, lifeless property descriptions
            that fail to capture the true essence of a home or space. Through
            the power of artificial intelligence, Property Vision translates
            visual splendour into rich, detailed narratives that allows your
            property to sell better.
            <br /> We believe in a world where every image tells its own story,
            where the corners of a room speak of comfort, the play of light
            through a window brings warmth, and the open spaces echo with
            potential. Our AI-driven platform ensures you communicate the soul
            of each property with elegance and precision, converting pixels to
            poetry for potential homeowners and investors.
          </p>
          <Image src={heroImg} alt="" className="description-about-img" />
        </div>
      </div>
    </div>
  );
};

export default ModalExpandable;
