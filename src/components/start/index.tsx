'use client';

import gsap from 'gsap';
import {
    useEffect,
    useRef
} from 'react';

export default function StartComponent() {
    const startTitleRef = useRef(null);
    const startTextRef = useRef(null);

    useEffect(() => {
        const startTitle = startTitleRef.current;
        const startText = startTextRef.current;

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
        <section className='w-ful min-h-[calc(100vh-88px)] flex justify-center md:justify-start bg-[url("/assets/crusader_background_min.jpg")] md:bg-[url("/assets/crusader_background_xxl.jpg")] bg-no-repeat bg-cover bg-center'>
            <div className='w-2/4 flex flex-col justify-start md:justify-center items-center gap-14 p-3'>
                <h1
                    className='opacity-0'
                    ref={startTitleRef}
                >
                    Cruzado
                </h1>
                <p
                    className='text-center opacity-0'
                    ref={startTextRef}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda atque magni incidunt vero corporis? At aliquid doloribus commodi ab,
                    ipsa adipisci odit nisi omnis. Adipisci ad perferendis illum enim fugit.
                </p>
            </div>
        </section>
    );
}