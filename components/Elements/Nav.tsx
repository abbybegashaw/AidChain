'use client';
import Image from 'next/image';
import React, { useMemo } from 'react';
import logo from '@/public/homepagenew/logo-img.svg';
import '../../styles/header.css';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { remove } from '@/utils/storage';

export const navItems = [
  { item: 'About Us', link: '/#about-us' },
  { item: 'Generate', link: '/login' },
  { item: 'Request a Demo', link: '/#contact-us' },
  { item: 'How It Works', link: '/#how-it-works' },
  { item: 'Pricing', link: '/#pricing' },
];

interface props {
  showNav?: boolean;
}

const Nav = ({ showNav }: props) => {
  const isLoggedIn = useMemo(() => {
    return !!Cookies.get('token');
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link href={'/'}>
          <Image src={logo} alt="" />
        </Link>
        <ul className="nav-items">
          <>
            {navItems.map(({ item, link }, i) => {
              return isLoggedIn && showNav && item === 'Generate' ? null : (
                <li
                  className="nav-list"
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
                  }}
                >
                  <Link className="nav-lists" href={link}>
                    {item}
                  </Link>
                </li>
              );
            })}
          </>
          {isLoggedIn && (
            <>
              <li>
                <Link className="nav-lists" href={'/app'}>
                  Generate
                </Link>
              </li>
              <li>
                <Link className="nav-lists" href={'/profile'}>
                  Profile
                </Link>
              </li>
            </>
          )}
          {isLoggedIn ? (
            <button
              className="log-btn"
              onClick={() => {
                Cookies.remove('token');
                remove('user');
                window.location.reload();
              }}
            >
              Log Out
            </button>
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

export default Nav;
