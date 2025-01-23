'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
    useEffect,
    useRef
} from 'react';

export default function SeasonComponent() {
    const seasonSectionRef = useRef(null);
    const seasonTitleRef = useRef(null);
    const seasonImgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const seasonSection = seasonSectionRef.current;
        const seasonTitle = seasonTitleRef.current;
        const seasonImg = seasonImgRef.current;

        gsap.fromTo(seasonTitle, {
            opacity: 0,
            y: 300,
            scale: 1.2
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: seasonSection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(seasonImg, {
            opacity: 0,
            scale: 0
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: seasonSection,
                start: 'top 70%'
            }
        });
    }, []);
    return (
        <section
            className='w-full min-h-screen flex flex-col items-center justify-center gap-8 pt-24'
            id='season'
            ref={seasonSectionRef}
        >
            <h6
                className='font-serif font-bold italic text-lg md:text-xl opacity-0'
                ref={seasonTitleRef}
            >
                Dádiva de Haedrig - Temporada 34
            </h6>
            <Image
                className='max-w-full h-auto opacity-0'
                src='/assets/season_34.avif'
                alt='Imagem Kites da Temporada'
                width={1199}
                height={596}
                ref={seasonImgRef}
            />
        </section>
    );
}