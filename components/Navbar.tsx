'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { NAV_ITEMS } from '../data';

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <header className="mx-auto px-4 sm:px-20 z-30 fixed top-0 w-full backdrop-blur flex-none bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#home">
              <div className="container flex items-center space-x-2">
                <h2
                  className="text-2xl font-bold cursor-pointer"
                  style={{ userSelect: 'none' }}
                >
                  Marius
                </h2>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      style={{ userSelect: 'none' }}
                      to={item.page}
                      className={
                        'cursor-pointer block lg:inline-block text-neutral-900 dark:text-neutral-100'
                      }
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
              {currentTheme === 'dark' ? (
                <button
                  title="Toggle light mode"
                  onClick={() => setTheme('light')}
                  className="bg-yellow-100 p-2 rounded-xl hover:bg-white"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  title="Toggle dark mode"
                  onClick={() => setTheme('dark')}
                  className="bg-cyan-100 p-2 rounded-xl hover:bg-white"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
