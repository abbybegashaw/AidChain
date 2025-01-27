import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/newDesign/logo-white-text.svg';
import linkedin from '../../public/newDesign/theahvschatgpt/linkedin.svg';
import twitter from '../../public/newDesign/theahvschatgpt/twitter.svg';
import instagram from '../../public/newDesign/theahvschatgpt/instagram.svg';
import theahImg from '../../public/newDesign/theahvschatgpt/theah-mob.svg';
import footerBg from '../../public/newDesign/footer-bg.svg';
import Link from 'next/link';
import Button from './Button';
import ContactUs from '../ContactUs/Form';

const FOOTER_LINKS = [
  { items: 'Home', link: '/' },
  { items: 'Why Theah', link: '/#why-theah' },
  { items: 'Theah vs ChatGPT', link: '/theah-vs-chatgpt' },
  { items: 'About', link: '/#about' },
  { items: 'Pricing', link: '/#pricing' },
  { items: 'Contact Us', link: '/#' },
];

const FooterNew = () => {
  const [isContact, setIsContact] = useState(false);

  const handleModelOpen = () => {
    setIsContact(true);
  };

  const handleModelClose = () => {
    setIsContact(false);
  };

  return (
    <div
      className="md:p-10 px-[22px] py-10 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      <div className="max-content">
        <div className="flex items-center justify-between w-full border-b border-gray-700 lg:pb-10 pb-[30px]">
          <Image src={logo} alt="" />
          <div className="flex items-end gap-9">
            <Link
              target="_blank"
              href={'https://www.linkedin.com/in/theah-ai'}
              className=""
            >
              <Image src={linkedin} alt="" />
            </Link>
            <Link
              target="_blank"
              href={'https://twitter.com/theah_ai'}
              className=""
            >
              <Image src={twitter} alt="" />
            </Link>
            <Link
              target="_blank"
              href={'https://www.instagram.com/theah_ai'}
              className=""
            >
              <Image src={instagram} alt="" />
            </Link>
          </div>
        </div>
        <ul className="grid md:grid-cols-3 grid-cols-2 lg:gap-4 gap-5 lg:mt-[60px] mt-10 lg:w-[422px] lg:min-w-[422px] lg:pb-10 pb-[30px]">
          {FOOTER_LINKS.map(({ items, link }, i) => {
            if (items === 'Contact Us') {
              return (
                <div key={i}>
                  <button
                    onClick={handleModelOpen}
                    className="text-sm text-white hover:text-gray-400"
                  >
                    {items}
                  </button>
                </div>
              );
            }
            return (
              <div key={i}>
                <Link href={link}>
                  <li className="text-sm text-white hover:text-gray-400">
                    {items}
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
        <div className="text-sm text-white border-t border-gray-700 lg:pt-10 pt-10 flex lg:flex-row flex-col-reverse lg:justify-between">
          <h3 className="font-medium">© 2024 Theah. All Rights Reserved</h3>
          <div className="flex lg:flex-row flex-col lg:gap-9 gap-5 mb-20 lg:mb-0">
            <Link href={'/terms-conditions'} className="hover:text-gray-400">
              Terms and Conditions
            </Link>
            <Link href={'/privacy-policy'} className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href={'/cookie-policy'} className="hover:text-gray-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      <div>{isContact && <ContactUs onClose={handleModelClose} />}</div>
    </div>
  );
};

export default FooterNew;
