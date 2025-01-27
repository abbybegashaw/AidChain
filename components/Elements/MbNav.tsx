import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/homepagenew/logo-img.svg';
// import hamburgerIcon from '../../public/homepagenew/humburger-icon.svg';
import hamburgerIcon from '../../public/homepagenew/hamburger.svg';
// import cancelIcon from '../../public/homepagenew/close-menu.svg';
import cancelIcon from '../../public/homepagenew/close-menu-circle.svg';
import '../../styles/mbNav.css';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { navItems } from './Nav';

interface props {
  showNav?: boolean;
}

const MbNav = ({ showNav }: props) => {
  const [showMenu, setShowMenu] = useState(false);

  const isLoggedIn = useMemo(() => {
    return !!Cookies.get('token');
  }, []);

  return (
    <div className="mb-nav md:hidden">
      <div className="logo-icon-panel">
        <Link href={'/'}>
          <Image src={logo} alt="" className="mb-nav-logo" />
        </Link>
        <Image
          onClick={() => setShowMenu(!showMenu)}
          src={showMenu ? cancelIcon : hamburgerIcon}
          alt=""
          className={`cursor-pointer ${
            !showMenu ? 'mb-hamburger' : 'mb-hamburger-close'
          }`}
        />
      </div>
      <div className={`mb-nav-items ${!showMenu ? 'hide-nav' : ''}`}>
        <div className="nav-header">
          <Link href={'/'}>
            <Image src={logo} alt="" className="mb-nav-logo" />
          </Link>
          <Image
            onClick={() => setShowMenu(!showMenu)}
            src={cancelIcon}
            alt=""
            className={`cursor-pointer ${
              !showMenu ? 'mb-hamburger' : 'mb-hamburger-close'
            }`}
          />
        </div>
        <ul className="nav-container">
          {navItems.map(({ item, link }, i) => {
            return isLoggedIn && showNav && item === 'Generate' ? null : (
              <li
                className="mb-nav-list"
                key={i}
                onClick={() => {
                  if (item === 'About Us') {
                    window.dispatchEvent(
                      new CustomEvent('clicked-nav-item-about')
                    );
                  } else if (item === 'Why Theah?') {
                    window.dispatchEvent(
                      new CustomEvent('clicked-nav-item-theah')
                    );
                  } else if (item === 'Pricing') {
                    window.dispatchEvent(
                      new CustomEvent('clicked-nav-item-pricing')
                    );
                  } else if (item === 'Request a Demo') {
                    window.dispatchEvent(
                      new CustomEvent('clicked-nav-item-demo')
                    );
                  }
                  setShowMenu(false);
                }}
              >
                <Link href={link}>{item}</Link>
              </li>
            );
          })}
          {isLoggedIn && (
            <>
              <li onClick={() => setShowMenu(false)} className="mb-nav-list">
                <Link href={'/app'}>Generate</Link>
              </li>
              <li onClick={() => setShowMenu(false)} className="mb-nav-list">
                <Link href={'/profile'}>Profile</Link>
              </li>
            </>
          )}
          {isLoggedIn ? (
            <>
              <button
                className="log-btn"
                onClick={() => {
                  Cookies.remove('token');
                  window.location.reload();
                }}
              >
                Log Out
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="log-btn">Login</button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MbNav;
