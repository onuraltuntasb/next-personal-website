'use client';

import React, { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { toast } from 'react-toastify';

const TopBar = () => {
    const pagesBasePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH;
    const [isDark, setisDark] = useState(false);

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme(); // use NextThemes mounted

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const scrollToView = (id: string, e: any) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
        }
    };

    return (
        <div className='sticky top-0 z-50 navbar bg-base-100 shadow-sm'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            {' '}
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />{' '}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className='dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 !text-2xl shadow'>
                        <li>
                            <a
                                onClick={(e) => {
                                    scrollToView('myJourneyId', e);
                                }}>
                                Wor1
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={(e) => {
                                    scrollToView('myPortfolioId', e);
                                }}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    toast.success(`contact copied to clipboard!`);
                                }}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <a className='btn text-xl btn-ghost'>Onur Altuntas</a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <button
                            onClick={(e) => {
                                scrollToView('myJourneyId', e);
                            }}
                            className='no-animation btn !text-lg btn-ghost'>
                            Work
                        </button>
                    </li>
                    <li>
                        <button
                            className='no-animation btn !text-lg btn-ghost'
                            onClick={(e) => {
                                scrollToView('myPortfolioId', e);
                            }}>
                            Portfolio
                        </button>
                    </li>
                    <li>
                        <button
                            className='no-animation btn !text-lg btn-ghost'
                            onClick={() => {
                                navigator.clipboard.writeText('onuraltuntasbusiness@gmail.com');
                                toast.success(`contact copied to clipboard!`);
                            }}>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
            <div className='navbar-end'>
                <div className='hidden sm:block'>
                    {theme === 'dark' ? (
                        <img
                            className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/onur-altuntas1/', '_blank');
                            }}
                            src={`${pagesBasePath}/assets/images/linkedin-dark.png`}
                            width={32}
                            alt='linkedin'
                        />
                    ) : (
                        <img
                            className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                            onClick={() => {
                                window.open('https://www.linkedin.com/in/onur-altuntas1/', '_blank');
                            }}
                            src={`${pagesBasePath}/assets/images/linkedin-light.png`}
                            width={32}
                            alt='linkedin'
                        />
                    )}

                    {theme === 'dark' ? (
                        <img
                            className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                            onClick={() => {
                                window.open('https://medium.com/@onuraltuntasbusiness_99398', '_blank');
                            }}
                            src={`${pagesBasePath}/assets/images/medium-dark.png`}
                            width={32}
                            alt='medium'
                        />
                    ) : (
                        <img
                            className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                            onClick={() => {
                                window.open('https://medium.com/@onuraltuntasbusiness_99398', '_blank');
                            }}
                            src={`${pagesBasePath}/assets/images/medium-light.png`}
                            width={32}
                            alt='medium'
                        />
                    )}

                    {theme === 'dark' ? (
                        <img
                            className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                            onClick={() => {
                                window.open('https://github.com/onuraltuntasb', '_blank');
                            }}
                            src={`${pagesBasePath}/assets/images/github-dark.png`}
                            width={32}
                            alt='github'
                        />
                    ) : (
                        <img
                            className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                            onClick={() => {
                                window.open('https://github.com/onuraltuntasb', '_blank');
                            }}
                            src={`${pagesBasePath}/assets/images/github-light.png`}
                            width={32}
                            alt='github'
                        />
                    )}
                </div>
                <label className='swap swap-rotate'>
                    {/* this hidden checkbox controls the state */}
                    <input
                        type='checkbox'
                        className='theme-controller'
                        value='dark'
                        checked={resolvedTheme === 'dark'}
                        onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                    />
                    {/* sun icon */}
                    <svg
                        className='swap-off h-8 w-8 fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className='swap-on h-8 w-8 fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'>
                        <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
                    </svg>
                </label>
                <div className='block sm:hidden'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-circle btn-ghost'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                {' '}
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h7'
                                />{' '}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className='dropdown-content menu z-1 mt-3 w-52 menu-sm rounded-box bg-base-100 p-2 shadow'>
                            <li>
                                {theme === 'dark' ? (
                                    <img
                                        className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                                        onClick={() => {
                                            window.open('https://www.linkedin.com/in/onur-altuntas1/', '_blank');
                                        }}
                                        src={`${pagesBasePath}/assets/images/linkedin-dark.png`}
                                        width={32}
                                        alt='linkedin'
                                    />
                                ) : (
                                    <img
                                        className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                                        onClick={() => {
                                            window.open('https://www.linkedin.com/in/onur-altuntas1/', '_blank');
                                        }}
                                        src={`${pagesBasePath}/assets/images/linkedin-light.png`}
                                        width={32}
                                        alt='linkedin'
                                    />
                                )}
                            </li>
                            <li>
                                {theme === 'dark' ? (
                                    <img
                                        className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                                        onClick={() => {
                                            window.open('https://medium.com/@onuraltuntasbusiness_99398', '_blank');
                                        }}
                                        src={`${pagesBasePath}/assets/images/medium-dark.png`}
                                        width={32}
                                        alt='medium'
                                    />
                                ) : (
                                    <img
                                        className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                                        onClick={() => {
                                            window.open('https://medium.com/@onuraltuntasbusiness_99398', '_blank');
                                        }}
                                        src={`${pagesBasePath}/assets/images/medium-light.png`}
                                        width={32}
                                        alt='medium'
                                    />
                                )}
                            </li>
                            <li>
                                {theme === 'dark' ? (
                                    <img
                                        className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                                        onClick={() => {
                                            window.open('https://github.com/onuraltuntasb', '_blank');
                                        }}
                                        src={`${pagesBasePath}/assets/images/github-dark.png`}
                                        width={32}
                                        alt='github'
                                    />
                                ) : (
                                    <img
                                        className='btn mr-2 btn-square transition-opacity duration-500 ease-in-out'
                                        onClick={() => {
                                            window.open('https://github.com/onuraltuntasb', '_blank');
                                        }}
                                        src={`${pagesBasePath}/assets/images/github-light.png`}
                                        width={32}
                                        alt='github'
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
