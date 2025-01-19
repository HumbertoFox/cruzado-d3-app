'use client';

import gsap from 'gsap';
import Image from 'next/image';
import {
    useEffect,
    useRef
} from 'react';

export default function StartComponent() {
    const startLogoRef = useRef(null);
    const startTitleRef = useRef(null);
    const startTextRef = useRef(null);

    useEffect(() => {
        const startLogo = startLogoRef.current;
        const startTitle = startTitleRef.current;
        const startText = startTextRef.current;

        gsap.fromTo(startLogo, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power1.in'
        });
        gsap.fromTo(startTitle, {
            opacity: 0,
            y: 300,
            x: 300
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            ease: 'power1.in'
        });
        gsap.fromTo(startText, {
            opacity: 0,
            y: -300,
            x: 300
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            ease: 'power1.in'
        });
    }, []);
    return (
        <section className='w-ful min-h-screen flex justify-center md:justify-start bg-[url("/assets/crusader_background_min.jpg")] md:bg-[url("/assets/crusader_background_xxl.jpg")] bg-no-repeat bg-cover bg-center'>
            <div className='w-full md:w-2/4 flex flex-col justify-start md:justify-center items-center gap-2 md:gap-10 p-3'>
                <Image
                    className='w-80 h-auto pt-12 md:pt-0 opacity-0'
                    src={'/assets/logo.avif'}
                    alt='Logo Diablo 3'
                    width={300}
                    height={150}
                    ref={startLogoRef}
                />
                <h1
                    className='font-serif font-bold italic text-lg md:text-xl opacity-0'
                    ref={startTitleRef}
                >
                    Cruzado
                </h1>
                <p
                    className='font-mono text-sm md:text-base text-justify opacity-0'
                    ref={startTextRef}
                >
                    O Cruzado é o defençor da justiça que veste uma armadura de metal e usa poder lampejante.
                    Quando o mal sai da toca para corromper e destituir a humanidade, o Cruzado ataca.
                </p>
            </div>
        </section>
    );
}