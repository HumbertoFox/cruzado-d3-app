'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import {
    useEffect,
    useRef
} from 'react';

export default function HeaderComponent() {
    const headerRef = useRef(null);
    const headerLogoRef = useRef(null);
    const headerStartRef = useRef(null);
    const headerHistoryRef = useRef(null);
    const headerGalleryRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const headerLogo = headerLogoRef.current;
        const headerStart = headerStartRef.current;
        const headerHistory = headerHistoryRef.current;
        const headerGallery = headerGalleryRef.current;

        gsap.fromTo(headerLogo, {
            opacity: 0,
            rotation: 180,
            x: 300
        }, {
            opacity: 1,
            rotation: 0,
            x: 0,
            duration: 1.5,
            ease: 'power1.in'
        });
        gsap.fromTo(headerStart, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power1.in'
        });
        gsap.fromTo(headerHistory, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power1.in'
        });
        gsap.fromTo(headerGallery, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 1,
            ease: 'power1.in'
        });

        const handleScroll = () => {
            if (window.scrollY > 0) {
                gsap.to(header, {
                    backgroundColor: '#12110f',
                    duration: 0.3,
                });
                gsap.to(headerLogo, {
                    width: 64,
                    duration: 0.3,
                });
            } else {
                gsap.to(header, {
                    backgroundColor: 'transparent',
                    duration: 0.3,
                });
                gsap.to(headerLogo, {
                    width: 96,
                    duration: 0.3,
                });
            };
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header
            className='fixed w-full max-w-screen-2xl top-0 flex justify-between items-center bg-[#12110f] py-3 px-4 z-10'
            ref={headerRef}
        >
            <Image
                className='max-w-24 opacity-0'
                src={'/assets/d3.svg'}
                alt='Logo Diablo 3'
                width={120}
                height={120}
                ref={headerLogoRef}
            />
            <nav>
                <ul className='flex gap-3'>
                    <li
                        className='hover:text-amber-700 duration-300 opacity-0'
                        ref={headerStartRef}
                    >
                        <Link
                            className='py-1 px-2'
                            href='#'
                        >
                            Inicio
                        </Link>
                    </li>
                    <li
                        className='hover:text-amber-700 duration-300 opacity-0'
                        ref={headerHistoryRef}
                    >
                        <Link
                            className='py-1 px-2'
                            href='#history'
                        >
                            História
                        </Link>
                    </li>
                    <li
                        className='hover:text-amber-700 duration-300 opacity-0'
                        ref={headerGalleryRef}
                    >
                        <Link
                            className='py-1 px-2'
                            href='#gallery'
                        >
                            Galeria
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}