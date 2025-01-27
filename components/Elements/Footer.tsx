import React from 'react';
import Image from 'next/image';
import logo from '../../public/homepagenew/logo-img.svg';
import twitter from '../../public/homepagenew/x.svg';
import insta from '../../public/homepagenew/instagram.svg';
import facebook from '../../public/homepagenew/facebook.svg';
import linkedin from '../../public/linkedin-outline.svg';
import Link from 'next/link';
import '@/styles/footerNew.css';

const Footer_Links = [
  { item: 'Contact', link: '/#contact-us' },
  { item: 'Privacy Policy', link: '/privacy-policy' },
  { item: 'Cookie Policy', link: '/cookie-policy' },
];

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-logo-links">
            <Link href={'/'}>
              <Image src={logo} alt="" className="footer-logo" />
            </Link>
            <ul className="footer-links">
              {Footer_Links.map(({ item, link }, i) => {
                return (
                  <li
                    className="footer-nav-items"
                    key={i}
                    onClick={() => {
                      if (item === 'Contact') {
                        window.dispatchEvent(
                          new CustomEvent('clicked-nav-item-demo')
                        );
                      }
                    }}
                  >
                    <Link className="footer-nav-list" href={link}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="social-media">
            <Link href={''} target="_blank">
              <Image src={insta} alt="" />
            </Link>
            <Link href={''} target="_blank">
              <Image src={linkedin} alt="" />
            </Link>
            <Link href={''} target="_blank">
              <Image src={twitter} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
