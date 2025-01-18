'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import {
    useEffect,
    useRef
} from 'react';

export default function HeaderComponent() {
    const headerLogoRef = useRef(null);
    const headerInicioRef = useRef(null);
    const headerHistoryRef = useRef(null);
    const headerGalleryRef = useRef(null);

    useEffect(() => {
        const headerLogo = headerLogoRef.current;
        const headerInicio = headerInicioRef.current;
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
        gsap.fromTo(headerInicio, {
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
    }, []);
    return (
        <header className='w-full flex justify-between items-center py-3 px-4'>
            <Image
                className='max-w-16 opacity-0'
                src={'/assets/d3.svg'}
                alt='Logo Diablo 3'
                width={100}
                height={100}
                ref={headerLogoRef}
            />
            <nav>
                <ul className='flex gap-3'>
                    <li
                        className='hover:text-amber-700 duration-300 opacity-0'
                        ref={headerInicioRef}
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
                            href='#'
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
                            href='#'
                        >
                            Galeria
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}